import { AuthAutorization } from '../types/index';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const header: any = async (auth: AuthAutorization) => {
  switch (auth.method) {
    case 'basic': {
      const autorizacao = Buffer.from(
        `${auth.basic.login}:${auth.basic.password}`,
        'utf8',
      ).toString('base64');
      return {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Basic ' + autorizacao,
      };
      break;
    }
    case 'bearer':
      return {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + auth.token,
      };
      break;
    case 'authorization':
      return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: auth.password,
      };
      break;
    default:
      return {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      };
  }
};
