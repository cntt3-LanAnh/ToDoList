import { useState } from 'react';

export type AppStore = {
  formControlInstance: any;
};

export interface IAppStore {
  data: AppStore;
  setData: (appStore: Partial<AppStore>) => void;
}

export const useAppContext = (): IAppStore => {
  const [data, handleSetData] = useState<AppStore>({ formControlInstance: null });

  const setData = (newData: Partial<AppStore>) => {
    handleSetData((dataPev) => ({ ...dataPev, ...newData }));
  };

  return {
    data,
    setData,
  };
};
