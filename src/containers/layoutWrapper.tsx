import { Layout as LayoutAuthenticated } from 'components/layout';
import { LAYOUT_TYPE } from 'constants/app';
import React from 'react';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const layoutTypeString = (children as any).type?.layout;

  if (layoutTypeString === LAYOUT_TYPE.authenticated) {
    return <LayoutAuthenticated>{children}</LayoutAuthenticated>;
  }

  return <>{children}</>;
}
