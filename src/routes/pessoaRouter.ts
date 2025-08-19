import { Router, Request, Response } from 'express';
import { getPessoa } from '../controllers/pessoaController';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .get(getPessoa);

export default pessoaRouter;