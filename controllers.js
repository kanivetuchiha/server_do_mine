const SERVERlist = [{
    id: 1,
    nome: "ANARCHcraft",
    porta: 1234, 
    tipo: "anarquico",
    estado: "operando",
    host: "aternos",
}];

const respostaErro = (res, status, mensagem) => {
    return res.status(status).json({ erro: mensagem });
};

const listar = (req, res) => {
    res.status(200).json(SERVERlist);
};

const deletar = (req, res) => {
    const { id } = req.params;
    const index = SERVERlist.findIndex(S => S.id === parseInt(id));

    if (index === -1) {
        return respostaErro(res, 404, 'Servidor não encontrado');
    }

    SERVERlist.splice(index, 1);
    res.send('servidor deletado');
};

const cadastrar = (req, res) => {
    const { nome, porta, tipo, estado, host} = req.body;
    
    if (!nome || !porta || !tipo || !estado || !host ) {
        
        const parametrosFaltando = [];
        if (!nome) parametrosFaltando.push("nome");
        if (!porta) parametrosFaltando.push("porta");
        if (!tipo) parametrosFaltando.push("tipo");
        if (!estado) parametrosFaltando.push("estado");
        if (!host) parametrosFaltando.push("host");

        return res.status(400).json({ erro: `Os seguintes parâmetros estão faltando: ${parametrosFaltando.join(', ')}` });
    }

    const novoSERVER = { id: SERVERlist.length + 1, nome, porta, tipo, estado, host};
    SERVERlist.push(novoSERVER);
    
    res.status(201).json(novoSERVER);
};

const atualizar = (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    
    if (isNaN(idInt)) {
        return respostaErro(res, 400, 'ID inválido');
    }

    const { nome, porta, tipo, estado, host } = req.body;
    const SERVER = SERVERlist.find(S => S.id === idInt);

    if (!SERVER) {
        return respostaErro(res, 404, 'Servidor não encontrado');
    }

    SERVER.nome = nome || SERVER.nome;
    SERVER.porta = porta || SERVER.porta;
    SERVER.tipo = tipo || SERVER.tipo;
    SERVER.estado = estado || SERVER.estado;
    SERVER.host = host || SERVER.host;

    res.status(200).json(SERVER);
};

const buscar = (req, res) => {
    const { id } = req.params;
    const SERVER = SERVERlist.find(S => S.id === parseInt(id));

    if (!SERVER) {
        return respostaErro(res, 404, 'Servidor não encontrado');
    }

    res.status(200).json(SERVER);
};

export default { listar, deletar, cadastrar, atualizar, buscar };
