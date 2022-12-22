import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { miuiTheme } from 'styles/theme';
import { LayoutType } from 'types/app';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layoutType: LayoutType;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={miuiTheme}>
      <StyledEngineProvider injectFirst />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
