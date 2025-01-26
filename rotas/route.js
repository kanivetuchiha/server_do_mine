import express from 'express';
import controller from '../controllers.js'; 


const router = express.Router();  


router.get('/', controller.listar); 
router.get('/:id', controller.buscar)
router.delete('/excluir/:id', controller.deletar); 
router.post('/cadastrar',controller.cadastrar)
router.put('/atualizar/:id', controller.atualizar)


export default router;
