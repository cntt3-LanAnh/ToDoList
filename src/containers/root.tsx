import React from 'react';

import { RootLayout } from './layout';

export const RootContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <RootLayout>{children}</RootLayout>;
};
