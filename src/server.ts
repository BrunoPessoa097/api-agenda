import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import permissionsPolicy from 'permissions-policy';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './config/swaggerbase';
import politics from './config/segure/politics';
import pessoaRouter from './routes/pessoaRouter';

const app = express();
const specs = swaggerJsdoc(swaggerOptions); 

app.use(express.json());
app.use(permissionsPolicy({
  features: politics
}));
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET','POST','PUT','DELETE']
}));
app.use(helmet());
dotenv.config();

const PORT: number = parseInt(`${process.env.PORT || 3000}`);

app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(specs));

app.use(pessoaRouter);


/**
 * @swagger
 * /:
 *  get:
 *    sumary: Retorna rota principal.
 *    description: Retorna rota principal.
 *    responses:
 *      200:
 *        description: Sucesso
 *        message: Api Agenda.
 */
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Api Agenda'
  });
});

/**
 * @swagger
 * /Não encontrada:
 *   get:
 *    sumary: Rota nao encontrada.
 *    description: Rota não encontrada.
 *    responses:
 *      404:
 *        description: 404 not found.
 *        message: Rota não encontrada.
 */
app.use((req: Request, res: Response) =>{
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

app.listen(PORT, () => {
  console.log('Server Rodando');
  console.log(`port:${PORT}`);
});