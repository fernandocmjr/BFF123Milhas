import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

interface IToken {
  exp: number;
  name: string;
  userId: number;
}

dotenv.config();

export const authorizeJWT = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let jwtToken = req.headers.authorization;

    // verify request has token
    if (!jwtToken) {
      return res.status(401).send({
        success: false,
        message: 'Token inválido ou não informado',
        error: 'Invalid token',
      });
    }

    if (jwtToken.toLowerCase().startsWith('bearer')) {
      jwtToken = jwtToken.slice('bearer'.length).trim();
    }

    if (!jwtToken) {
      return res.status(401).send({
        success: false,
        message: 'Token inválido ou não informado',
        error: 'Invalid token',
      });
    }

    const decoded = (await verifyToken(
      jwtToken,
      process.env.SECRET_KEY_JWT as string,
    ).catch((error: unknown) => {
      const { message } = error as Error;
      return res.status(401).send({
        success: false,
        message: 'Token expirado ou inválido',
        error: message,
      });
    })) as IToken;
    req.userId = decoded.userId;
    req.name = decoded.name;
    next();
  } catch (error: unknown) {
    const { message, name } = error as Error;
    if (name === 'TokenExpiredError') {
      return res
        .status(401)
        .send({ success: false, message: 'Expired token', error: message });
    }
    return res.status(500).send({
      success: false,
      message: 'Falha na autenticação do usuário',
      error: 'Failed to authenticate user',
    });
  }
};

const verifyToken = <IToken>(
  token: string,
  secret: string,
): Promise<IToken> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decode) => {
      if (!error) {
        resolve(decode as IToken);
      } else {
        reject(error);
      }
    });
  });
};
