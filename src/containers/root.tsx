import { useFetchCurrentUser } from 'hooks/useFetchCurrentUser';
import React from 'react';

import { LayoutWrapper } from '../containers/layoutWrapper';

export const RootContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useFetchCurrentUser();

  return <LayoutWrapper>{children}</LayoutWrapper>;
};
