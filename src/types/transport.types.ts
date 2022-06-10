export interface IAllcueResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface IAllcueRequestConfig {
  headers?: Record<string, string | number | boolean>;
  params?: string | Record<string, string | number | boolean> | URLSearchParams;
}

export interface ITransport {
  httpPost<T = any, D = any>(
    url: string,
    data?: D,
    config?: IAllcueRequestConfig,
  ): Promise<IAllcueResponse<T>>;
}
