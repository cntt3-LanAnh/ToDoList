import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { index as LayoutAdmin } from 'components/layout/admin';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';
import { miuiTheme } from 'styles/theme';
import { LayoutType } from 'types/app';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layoutType: LayoutType;
  type: {
    layoutType: LayoutType;
  };
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getLayout = ({ children, layoutType }: { children: NextPageWithLayout & React.ReactNode; layoutType: LayoutType }) => {
  if (layoutType === LayoutType.admin) {
    return <LayoutAdmin>{children}</LayoutAdmin>;
  }

  return children;
};

export function RootLayout({ children }: { children: NextPageWithLayout & React.ReactNode }) {
  const layoutType = children?.type?.layoutType;

  return (
    <ThemeProvider theme={miuiTheme}>
      <StyledEngineProvider injectFirst />
      <CssBaseline />
      {getLayout({ children, layoutType })}
    </ThemeProvider>
  );
}
