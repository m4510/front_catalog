import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Este es el catalogo de agilgob" />
            <meta name="keywords" content="Catalogo,catalogos,Gobierno,Estado de jalisco" />
            <meta name="author" content="Catalogo" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
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
