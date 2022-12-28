import { createContext, ReactNode, useContext } from 'react';

import { IAppStore, useAppContext } from './useAppContext';

export interface IStoreContext {
  appStore: IAppStore;
}

export const GlobalStoreContext = createContext<IStoreContext>(null!);

export function GlobalStoreProvider({ children }: { children: ReactNode }) {
  const appStore = useAppContext();

  return <GlobalStoreContext.Provider value={{ appStore }}>{children}</GlobalStoreContext.Provider>;
}

export function useGlobalStoreContext() {
  const context = useContext(GlobalStoreContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }

  return context;
}
