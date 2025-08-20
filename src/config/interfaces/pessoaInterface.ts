interface IPessoa {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  dataNascimento?: Date;
};

export default IPessoa;