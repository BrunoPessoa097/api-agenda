import { Request, Response } from 'express';

export const getPessoa = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Rota Pessoa'
  });
};