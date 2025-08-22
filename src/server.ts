import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import permissionsPolicy from 'permissions-policy';
import politics from './config/segure/politics';
import pessoaRouter from './routes/pessoaRouter';

const app = express();

app.use(express.json());
// Politicas de segurança 
app.use(permissionsPolicy({
  features: politics
}));
app.use(cors({
  origin: ['http://localhost:3000'], // endereço do front permitido. para adicionar mais endereços, separar por vírgula e colocar entre aspas.
  methods: ['GET','POST','PUT','DELETE']
}));
app.use(helmet());
dotenv.config();

const PORT: number = parseInt(`${process.env.PORT || 3000}`);

app.use(pessoaRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Api Agenda'
  });
});

app.use((req: Request, res: Response) =>{
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

app.listen(PORT, () => {
  console.log('Server Rodando');
  console.log(`port:${PORT}`);
});