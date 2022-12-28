import React from 'react';

import { FormDevTool } from './formDevTool';
import { RootLayout } from './layout';

export const RootContainer = ({ children }: { children: any }) => {
  return (
    <>
      <FormDevTool />
      <RootLayout>{children}</RootLayout>
    </>
  );
};
