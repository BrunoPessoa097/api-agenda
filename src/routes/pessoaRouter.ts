import { Router, Request, Response } from 'express';
import { getPessoa, 
        addPessoa,
        buscarPessoa,
        updatePessoa
       } from '../controllers/pessoaController';
import { pessoaValidarEntrada,
         pessoaPadronizarEntrada
       } from '../middlewares/pessoaMiddleware';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .get(getPessoa)
  .post(
    pessoaValidarEntrada,
    pessoaPadronizarEntrada, 
    addPessoa
  );

pessoaRouter.route('/pessoa/:id')
  .get(buscarPessoa)
  .put(
    pessoaValidarEntrada,
    pessoaPadronizarEntrada,
    updatePessoa
  );

export default pessoaRouter;