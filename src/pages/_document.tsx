import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-test="extract" dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="jp">
        <Head>
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
          <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
