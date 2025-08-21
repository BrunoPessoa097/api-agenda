import { Request, Response } from 'express';
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

export default dados;

export const getPessoa = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Get Pessoa',
    inf: dados
  });
};

export const addPessoa = (req: Request, res: Response) => {
  const {
    nome,
    telefone,
    email,
    endereco,
    dataNascimento,
    ativo,
    senha
  } = req.body.padrao;

  const pessoa: IPessoa = {
    id: dados.length + 1,
    nome,
    telefone,
    email,
    endereco,
    dataNascimento,
    ativo,
    senha,
    data: {
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }; 

  try{
    dados.push(pessoa);
    return res.status(200).json({
      message: 'Add Pessoa',
      method: req.method,
      dado: pessoa,
      info: dados.length
    });
  }catch(error){
    return res.status(500).json({
      message: 'Erro ao adicionar pessoa',
      error: error
    });
  };
};

export const buscarPessoa = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const vdd = verificarExistPessoa(id);
  
  if(vdd) {
    return res.status(404).json({
      message: 'Pessoa não encontrada',
      route: 'buscar pessoa',
      id: id
    });
  };
  
  const result = dados.find((p)=> p.id === id);
  
  res.status(200).json({
    message: 'searchPessoa',
    id: id,
    dado: result
  });
};

export const updatePessoa = (req: Request, res: Response) => {
  const id:number = parseInt(req.params.id);
  const vdd = verificarExistPessoa(id);

  if(vdd) {
    return res.status(404).json({
      message: 'Pessoa não encontrada',
      route: 'update pessoa',
      id,
    });
  };

  const result = dados.findIndex((p)=>p.id === id);

  dados[result] = {
    id,
    ...req.body.padrao
  };

  res.status(200).json({
    message: 'updatePessoa',
    dados: dados[result]
  });
}

export const verificarExistPessoa = (id:number): boolean => {
  const exist = dados.findIndex((p)=> p.id === id);

  return exist === -1 ? true : false;
}