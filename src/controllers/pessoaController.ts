import { Request, Response } from 'express';
import * as fs from 'fs';
import IPessoa from '../config/interfaces/pessoaInterface';

const dados: IPessoa[] = [{
  id: 1,
  nome: "Joao",
  telefone: "(77)7777-7777",
  email: "joao@gmail.com",
  endereco: "Rua C",
  dataNascimento: new Date('1998-08-06'),
  ativo: true,
  senha: btoa("1244"),
  data:{
    createdAt: new Date(),
    updatedAt: new Date()
  }
}];

export const getPessoa = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Get Pessoa',
    inf: dados
  });
};

export const addPessoa = (req: Request, res: Response) => {
  /*const {
    nome,
    telefone,
    email,
    endereco,
    dataNascimento
  }: IPessoa = req.body*/

  res.status(200).json({
    message: 'Add Pessoa',
    method: req.method
  });
};