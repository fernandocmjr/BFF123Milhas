import axios from 'axios';
import { header } from '../header/index';
import { Parameter } from '../types/index';

export const getAxios = async (parameter: Parameter) => {
  const headers = await header(parameter.auth);
  const descUrl: string = parameter.api + parameter.url;
  return await axios.get(descUrl, { headers: headers });
};
export const delAxios = async (parameter: Parameter) => {
  const headers = await header(parameter.auth);
  const descUrl: string = parameter.api + parameter.url;
  return await axios.delete(descUrl, { headers: headers });
};
export const patchAxios = async (parameter: Parameter) => {
  const headers = await header(parameter.auth);
  const descUrl: string = parameter.api + parameter.url;
  return await axios.patch(descUrl, parameter.param, { headers: headers });
};
export const putAxios = async (parameter: Parameter) => {
  const headers = await header(parameter.auth);
  const descUrl: string = parameter.api + parameter.url;
  return await axios.put(descUrl, parameter.param, { headers: headers });
};
export const postAxios = async (parameter: Parameter) => {
  const headers = await header(parameter.auth);
  const descUrl: string = parameter.api + parameter.url;
  return await axios.post(descUrl, parameter.param, { headers: headers });
};
