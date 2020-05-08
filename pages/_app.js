import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  touch-action: none;
}

@font-face {
  font-family: 'Work Sans';
  src: url('./fonts/WorkSans-ExtraBold.woff2') format('woff2'),
    url('./fonts/WorkSans-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('./fonts/WorkSans-Regular.woff2') format('woff2'),
    url('./fonts/WorkSans-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('./fonts/WorkSans-SemiBold.woff2') format('woff2'),
    url('./fonts/WorkSans-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('./fonts/WorkSans-Light.woff2') format('woff2'),
    url('./fonts/WorkSans-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
 html {
   font-family: 'Work Sans';
 }
`;

export default function MyApp({ Component, pageProps }) {
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
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
