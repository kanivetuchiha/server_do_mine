-- EXPLICAÇÃO GERAL --

Esse é um projeto de API que tem como principal objetivo relaizar funções de listagem, registro, atualização, busca e exclusão de dados com base em seus respectivos IDs com o tema servidores multplayers de Minecraft.

-- COMO INICIAR --

abra o arquivo no VSCode execute o terminal do mesmo e execute os seguintes códigos:

- npm init -y
- npm install express
- node server.js


-- ROTAS --

GET localhost:3000/ -- essa é a rota raiz do projeto que lista os produtos já cadastrados 

exemplo -

na barra de pesquisa: localhost:3000

saida:

{
    id: 1,
    nome: "ANARCHcraft",
    porta: 1234, 
    tipo: "anarquico",
    estado: "operando",
    host: "aternos",
}

GET localhost:3000/:id -- essa é a rota que realiza uma busca com base no ID fornecido e retorna um unico servidor.

exemplo -

na barra de pesquisa: localhost:3000/1

saida: 

{
    id: 1,
    nome: "ANARCHcraft",
    porta: 1234, 
    tipo: "anarquico",
    estado: "operando",
    host: "aternos",
}


DELETE localhost:3000/excluir/:id -- essa é a requisição que exclui um servidor existente com base no seu ID

exemplo -

na barra de pesquisa: localhost:3000/excluir/1

saida:

"servidor excluido"


--  as proximas requisições sera nescessario o uso do app insomnia ou postman --

POST localhost:3000/cadastrar -- essa é a rota que junto de um arquivo JSON regista o conteudo do JSON no servidor

exemplo -

na barra de pesquisa: localhost:3000/cadastrar


body.JSON:

{
    "nome":"BuildBattle",
    "porta":177.738.293,
    "tipo":"mini-game",
    "estado":"operando",
    "host":"aternos"
}

saida:

"servidor cadastrado"

PUT localhost:3000/atualizar/:id -- essa é a requisição que altera um ou mais dados de um servidor ja existente utilizando o ID como metodo de busca

exemplo -

na barra de pesquisa: localhost:3000/atualizar/2

body.JSON

{
    "nome":"BBT",
    "porta": 123.123.445
}

saida:

{
    "nome":"BBT",
    "porta":123.123.445,
    "tipo":"mini-game",
    "estado":"operando",
    "host":"aternos"
}


