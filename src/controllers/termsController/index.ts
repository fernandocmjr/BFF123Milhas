import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  return res.json({
    message: 'Criar documentação geral sobre o BFF',
  });
};
