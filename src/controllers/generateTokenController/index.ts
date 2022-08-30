import { Request, Response } from 'express';
import { sign, SignOptions } from 'jsonwebtoken';

export const generateToken = async (req: Request, res: Response) => {
  try {
    const payload = {
      name: 'Nome de Teste',
      userId: 123,
    };

    const privateKey = process.env.SECRET_KEY_JWT as string;

    const signInOptions: SignOptions = {
      expiresIn: 86400,
    };

    const token = sign(payload, privateKey, signInOptions);

    return res.status(200).send({
      success: true,
      data: token,
    });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({
      success: false,
      message: 'Mensagem a ser apresentada para o usuário',
      error: message,
    });
  }
};
