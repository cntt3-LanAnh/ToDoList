import 'reflect-metadata';
import 'styles/index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosProvider } from 'containers/axiosProvider';
import { AppPropsWithLayout } from 'containers/layout';
import { RootContainer } from 'containers/root';
import Head from 'next/head';
import { Router } from 'next/router';
import { NextSeo } from 'next-seo';
import I18nProvider from 'next-translate/I18nProvider';
import nProgress from 'nprogress';
import { GlobalStoreProvider } from 'stores';

import i18nConfig from '../../i18n.json';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const queryClient = new QueryClient();
import { useMemo } from 'react';

import JPCommon from '../../locales/jp/common.json';
import JPLogin from '../../locales/jp/login.json';

const i18nNameSpaceJP = {
  common: JPCommon,
  login: JPLogin,
};

// const i18nNameSpaceEN = {
//   common: ENCommon,
// };

function App({ Component, pageProps }: AppPropsWithLayout) {
  const i18nNameSpace = useMemo(() => {
    // Get Current Language in order to load namespace

    return i18nNameSpaceJP;
  }, []);

  return (
    <>
      <NextSeo defaultTitle="Admin" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <GlobalStoreProvider>
        <I18nProvider lang={'jp'} namespaces={i18nNameSpace} config={i18nConfig}>
          <AxiosProvider>
            <QueryClientProvider client={queryClient}>
              <RootContainer>
                <Component {...pageProps} />
              </RootContainer>
            </QueryClientProvider>
          </AxiosProvider>
        </I18nProvider>
      </GlobalStoreProvider>
    </>
  );
}

export default App;
