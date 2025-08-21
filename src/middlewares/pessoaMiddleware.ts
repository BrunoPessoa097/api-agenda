import { Request, Response, NextFunction } from 'express';
import IPessoa from '../config/interfaces/pessoaInterface';
import dados from '../controllers/pessoaController';

export const pessoaValidarEntrada = (req: Request, res: Response, next: NextFunction) => {
  const {
    nome,
    telefone,
    email,
    endereco,
    dataNascimento,
    ativo
  } = req.body;

  if(!nome || 
     !telefone ||
     !email ||
     !endereco ||
     !dataNascimento ||
     !ativo) 
  {
    return res.status(400).json({
      message: "Dados invalidos"
    });
  }
  next();
};

export const pessoaPadronizarEntrada = (req: Request, res: Response, next: NextFunction) => {
  req.body.padrao = {};
  req.body.padrao.nome = req.body.nome.trim().toUpperCase();
  req.body.padrao.telefone = req.body.telefone.trim();
  req.body.padrao.email = req.body.email.trim();
  req.body.padrao.endereco = req.body.endereco.trim();
  req.body.padrao.dataNascimento = Date.parse(req.body.dataNascimento);
  req.body.padrao.ativo = req.body.ativo;
  req.body.padrao.senha = btoa(req.body.senha.trim());
  
  /*res.status(200).json({
    message: 'Pessoa Padronizar',
    recebido: req.body,
    alterado: req.body.padrao
  });*/
  next();
};