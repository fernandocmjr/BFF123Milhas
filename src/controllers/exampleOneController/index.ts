import axios from 'axios';
import { Request, Response } from 'express';
import { schema } from '../../schema/exampleOne';

export const getMethod = async (req: Request, res: Response) => {
  try {
    axios({
      method: 'GET',
      url: 'http://172.22.0.1:1234/api/v3.1/loyalty/dashboard/filters',
      headers: {
        'Content-type': 'application/json;charset=UTF=8',
        'Access-control-Allow-Origin': '*',
      },
    })
      .then(response => {
        // console.log('userId', req.userId);
        // console.log('name', req.name);
        return res.status(200).send({
          success: true,
          data: {
            type: response.data.type,
            status: response.data.status,
            errosType: response.data.errosType,
          },
        });
      })
      .catch(error => {
        // console.log('error:', error.message);
        throw new Error(error.message);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    // console.log('Mensagem de erro:', message);
    return res.status(500).send({
      success: false,
      message: 'Mensagem a ser apresentada para o usuário',
      error: message,
    });
  }
};

export const errorMethod = async (req: Request, res: Response) => {
  try {
    throw new Error('Error process endpoint');
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({
      success: false,
      message: 'Mensagem a ser apresentada para o usuário',
      error: message,
    });
  }
};

export const postMethod = async (req: Request, res: Response) => {
  try {
    schema
      .validate(req.body)
      .then(async () => {
        // axios({ method: "GET", url: "http://123milhas.docker/api/v3.1/loyalty/dashboard/filters", headers: {
        //     "Content-type":"application/json;charset=UTF=8",
        //     "Access-control-Allow-Origin": "*"
        // }}).then(response => {
        return res.status(200).send({
          success: true,
          data: {
            responseBackend: 'Response BackEnd Post/YUP',
          },
        });
        // }).catch (error => {
        //     throw new Error(error.message);
        // });
      })
      .catch(error => {
        return res.status(500).send({
          success: false,
          message: error.message,
        });
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
