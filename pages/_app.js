import React, { useEffect } from 'react';
import Head from 'next/head';

const isServer = typeof window === 'undefined';
const WebFont = !isServer ? require('webfontloader') : null;

export default function MyApp({ Component, pageProps }) {
  //   useEffect(() => {
  //     WebFont.load({
  //       custom: {
  //         families: ['Geometrica', 'Barlow'],
  //         urls: ['/fonts/geometrica.css', '/fonts/barlow.css'],
  //       },
  //     });
  //   }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="stylesheet" href="./reset.css" />

        <title>Gonzalo Rascón — Web Developer</title>
      </Head>
      <Component {...pageProps} />
      <style jsx>
        {`
          :global(html.wf-active > body) {
            font-family: 'Geometrica', 'Arial', 'Helvetica', sans-serif;
          }
        `}
      </style>
    </>
  );
}