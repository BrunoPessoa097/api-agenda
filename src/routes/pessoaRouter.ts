import { Router, Request, Response } from 'express';
import { getPessoa, 
        addPessoa
       } from '../controllers/pessoaController';
import { pessoaValidarEntrada,
         pessoaPadronizarEntrada
       } from '../middlewares/pessoaMiddleware';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .get(getPessoa)
  .post(pessoaValidarEntrada, pessoaPadronizarEntrada, addPessoa);

export default pessoaRouter;