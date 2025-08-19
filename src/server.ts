import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Api Agenda'
  });
});

app.listen(PORT, () => {
  console.log('Server Rodando');
  console.log(`port:${PORT}`);
});