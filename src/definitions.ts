export interface BinaryNativeClientPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  sendRequest(options: { url: string, filePath: string, method: string, headers: any }): Promise<{ status: number }>;
}

export interface RequestOptions {
  url: string;
  filePath: string;
  method: RequestMethod;
  headers: { [key: string]: string };
}

export interface RequestResponse {
  status: number;
}

export enum RequestMethod {
  POST = 'POST',
  PUT = 'PUT'
}