import { Router, Request, Response } from 'express';
import { getPessoa, 
        addPessoa
       } from '../controllers/pessoaController';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .get(getPessoa)
  .post(addPessoa);

export default pessoaRouter;