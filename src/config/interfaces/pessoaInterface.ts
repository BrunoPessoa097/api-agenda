interface IPessoa {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  dataNascimento?: Date;
  ativo: boolean;
  senha: string;
  data: {
    createdAt: Date;
    updatedAt?: Date
  }
};

export default IPessoa;