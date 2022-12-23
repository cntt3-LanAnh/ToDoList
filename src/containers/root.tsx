import React from 'react';

import { RootLayout } from './layout';

export const RootContainer = ({ children }: { children: any }) => {
  return <RootLayout>{children}</RootLayout>;
};
