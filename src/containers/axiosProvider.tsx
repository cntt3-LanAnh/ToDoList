/* eslint-disable @typescript-eslint/no-explicit-any */
import { appConfig } from '@configs/app';
import Axios, { AxiosInstance } from 'axios';
import { createContext, useContext, useMemo } from 'react';

export const AxiosContext = createContext<AxiosInstance>(undefined as any);

export function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
      baseURL: appConfig.apiURL,
    });

    axios.interceptors.request.use((config) => {
      const token = window.localStorage.getItem(appConfig.authSecretKey);
      const customConfig = config as any;
      if (token) {
        customConfig.headers.Authorization = `Bearer ${token}`;
      }

      return customConfig;
    });

    return axios;
  }, []);

  return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>;
}

export function useAxios() {
  return useContext(AxiosContext);
}
