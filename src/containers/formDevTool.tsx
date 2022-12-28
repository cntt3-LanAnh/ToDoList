import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useGlobalStoreContext } from 'stores';

export const FormDevTool = () => {
  const { appStore } = useGlobalStoreContext();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!appStore.data.formControlInstance) {
    return null;
  }

  return <DevTool control={appStore.data.formControlInstance} />;
};
