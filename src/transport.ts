import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as http from 'http';
import * as https from 'https';
import {
  IAllcueRequestConfig,
  IAllcueResponse,
  ITransport,
} from 'src/types/transport.types';

export class Transport implements ITransport {
  private axios: AxiosInstance;

  constructor() {
    // https://gist.github.com/ccnokes/94576dc38225936a3ca892b989c9d0c6
    this.axios = axios.create({
      timeout: 60000,
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      maxRedirects: 10,
      maxContentLength: 50 * 1000 * 1000,
    });
  }

  async httpPost<T = any, D = any>(
    url: string,
    data?: D,
    config?: IAllcueRequestConfig,
  ): Promise<IAllcueResponse<T>> {
    return this.axios.post(url, data, config);
  }
}
