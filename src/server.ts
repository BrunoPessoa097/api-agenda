import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
dotenv.config();

const PORT: number = parseInt(`${process.env.PORT || 3000}`);

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