/* eslint-disable import/no-extraneous-dependencies */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string, headers: CRUD.Headers) {
    this.client = axios.create({
      baseURL,
      headers,
      timeout: 15000,
    });
  }

  create(path: string, data: object): Promise<AxiosResponse> {
    return this.client.post(path, data);
  }

  delete(path: string, id: number, data: object): Promise<AxiosResponse> {
    return this.client.delete(`/${path}/${id}`, data);
  }

  getAll(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.get(path, config);
  }

  get(path: string, id: number): Promise<AxiosResponse> {
    return this.client.get(`/${path}/${id}`);
  }

  update(path: string, id: number, data: object): Promise<AxiosResponse> {
    return this.client.put(`/${path}/${id}`, data);
  }
}

export default ApiClient;
