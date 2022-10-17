import 'reflect-metadata';
import 'styles/antd/antd.less';
import 'styles/index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SEO } from 'components/seo';
import { AxiosProvider } from 'containers/axiosProvider';
import { PersistGate } from 'containers/persistGate';
import { RootContainer } from 'containers/root';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { Provider } from 'react-redux';
import { persistor, storeGlobal } from 'stores';

import { defaultSEO } from '../../next-seo.config';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO configs={defaultSEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Provider store={storeGlobal}>
        <AxiosProvider>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <RootContainer>
                <Component {...pageProps} />
              </RootContainer>
            </QueryClientProvider>
          </PersistGate>
        </AxiosProvider>
      </Provider>
    </>
  );
}

export default App;
