import { createContext, ReactNode, useContext } from 'react';

import { IAppStore, useAppContext } from './useAppContext';
import { IAuthenticationStore, useAuthenticationContext } from './useAuthentication';

export interface IStoreContext {
  appStore: IAppStore;
  authenticationStore: IAuthenticationStore;
}

export const GlobalStoreContext = createContext<IStoreContext>(null!);

export function GlobalStoreProvider({ children }: { children: ReactNode }) {
  const appStore = useAppContext();
  const authenticationStore = useAuthenticationContext();

  return <GlobalStoreContext.Provider value={{ appStore, authenticationStore }}>{children}</GlobalStoreContext.Provider>;
}

export function useGlobalStoreContext() {
  const context = useContext(GlobalStoreContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }

  return context;
}
