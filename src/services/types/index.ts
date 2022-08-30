export type AuthAutorization = {
  method: string;
  token: string;
  basic: {
    login: string;
    password: string;
  };
  password: string;
};

export type Parameter = {
  api: string;
  url: string;
  param: string;
  token: string;
  auth: AuthAutorization;
};
