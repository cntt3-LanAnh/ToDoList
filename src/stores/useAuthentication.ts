import { appConfig } from '@configs/app';
import { useEffect, useState } from 'react';

export type AuthenticationStore = {
  token: string;
};

export interface IAuthenticationStore {
  data: AuthenticationStore;
  setData: (AuthenticationStore: Partial<AuthenticationStore>) => void;
  logout: () => void;
}

export const useAuthenticationContext = (): IAuthenticationStore => {
  const [data, handleSetData] = useState<AuthenticationStore>({ token: '' });

  const setData = (newData: Partial<AuthenticationStore>) => {
    handleSetData((dataPev) => ({ ...dataPev, ...newData }));
  };

  useEffect(() => {
    const token = window.localStorage.getItem(appConfig.authSecretKey);

    if (!token) {
      return;
    }

    setData({ token });
  }, []);

  useEffect(() => {
    if (!data.token) {
      return;
    }

    window.localStorage.setItem(appConfig.authSecretKey, data.token);
  }, [data.token]);

  const logout = () => {
    window.localStorage.setItem(appConfig.authSecretKey, '');
    setData({ token: '' });
  };

  return {
    data,
    setData,
    logout,
  };
};
