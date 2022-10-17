/* eslint-disable @typescript-eslint/no-explicit-any */
export type APIConfig = {
  keys: string[];
  endPoint: string;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  factoryData?: any;
};
