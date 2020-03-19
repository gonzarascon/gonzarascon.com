import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <Html>
        <Head>
          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8BWQD5');`,
            }}
          />
          {/* <!-- End Google Tag Manager --> */}
          {styleTags}
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-rim-auto-match" content="none" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#3d5af1" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="author" content="https://www.gonzarascon.com" />
          <meta name="title" content="Gonzalo Rascón — Web Development" />
          <meta
            name="description"
            content="Gonzalo Rascon is a Web Developer based in Buenos Aires, Argentina."
          />
          <meta
            name="keywords"
            content="developer, web development, react, html, css, javascript, js"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <meta
            property="og:title"
            content="Gonzalo Rascón — Web Development"
          />
          <meta
            property="og:site_name"
            content="Gonzalo Rascón — Web Development"
          />
          <meta property="og:url" content="https://gonzarascon.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Gonzalo Rascon is a web developer based in Buenos Aires, Argentina"
          />
          <meta property="og:image" content="/images/share-img.png" />
          <meta
            property="og:image:secure_url"
            content="/images/share-img.png"
          />

          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://gonzarascon.com/images/share-img.png"
          />
          <meta name="twitter:site" content="https://gonzarascon.com" />
          <meta name="twitter:creator" content="@gonza_rascon" />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W8BWQD5"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
