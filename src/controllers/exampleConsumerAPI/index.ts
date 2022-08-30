import { Request, Response } from 'express';
import {
  getAxios,
  postAxios,
  putAxios,
  delAxios,
  patchAxios,
} from '../../services/api/index';
import { AxiosResponse, AxiosError } from 'axios';

export const post = async (req: Request, res: Response) => {
  try {
    await postAxios({
      api: 'http://172.22.0.1:3333',
      url: req.originalUrl,
      param: req.body,
      token: '',
      auth: {
        method: 'basic',
        token: '',
        basic: {
          login: 'a',
          password: 'b',
        },
        password: '',
      },
    })
      .then((response: AxiosResponse) => {
        return res.status(response.status).send(response.data);
      })
      .catch((error: AxiosError) => {
        return res.status(500).send(error.response?.data || error.response);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({ error: true, message: message });
  }
};

export const put = async (req: Request, res: Response) => {
  try {
    await putAxios({
      api: 'http://172.22.0.1:3333',
      url: req.originalUrl,
      param: req.body,
      token: '',
      auth: {
        method: 'basic',
        token: '',
        basic: {
          login: 'a',
          password: 'b',
        },
        password: '',
      },
    })
      .then((response: AxiosResponse) => {
        return res.status(response.status).send(response.data);
      })
      .catch((error: AxiosError) => {
        return res.status(500).send(error.response?.data || error.response);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({ error: true, message: message });
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    await delAxios({
      api: 'http://172.22.0.1:3333',
      url: req.originalUrl,
      param: req.body,
      token: '',
      auth: {
        method: 'basic',
        token: '',
        basic: {
          login: 'a',
          password: 'b',
        },
        password: '',
      },
    })
      .then((response: AxiosResponse) => {
        return res.status(response.status).send(response.data);
      })
      .catch((error: AxiosError) => {
        return res.status(500).send(error.response?.data || error.response);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({ error: true, message: message });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    await getAxios({
      api: 'http://172.22.0.1:3333',
      url: req.originalUrl,
      param: req.body,
      token: '',
      auth: {
        method: 'basic',
        token: '',
        basic: {
          login: 'a',
          password: 'b',
        },
        password: '',
      },
    })
      .then((response: AxiosResponse) => {
        return res.status(200).send(response.data);
      })
      .catch((error: AxiosError) => {
        return res.status(500).send(error.response?.data || error.response);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({ error: true, message: message });
  }
};

export const patch = async (req: Request, res: Response) => {
  try {
    await patchAxios({
      api: 'http://172.22.0.1:3333',
      url: req.originalUrl,
      param: req.body,
      token: '',
      auth: {
        method: 'basic',
        token: '',
        basic: {
          login: 'a',
          password: 'b',
        },
        password: '',
      },
    })
      .then((response: AxiosResponse) => {
        return res.status(response.status).send(response.data);
      })
      .catch((error: AxiosError) => {
        return res.status(500).send(error.response?.data || error.response);
      });
  } catch (error: unknown) {
    const { message } = error as Error;
    return res.status(500).send({ error: true, message: message });
  }
};
