import App from "next/app";
import Head from "next/head";
import React from "react";

import HeadMetas from "../components/HeadMetas";

import "../styles/global.css";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {HeadMetas({
            title: "1313labs",
            description: "Crafting products",
          })}

          <link rel="canonical" href="https://1313labs.com/" />
          <meta name="robots" content="index, follow" />

          <meta property="og:url" content="https://1313labs.com/" />
          <meta property="og:image" content="/github.png" />
          <meta property="og:image:width" content="32" />
          <meta property="og:image:height" content="32" />
          <meta property="og:type" content="website" />

          <link rel="icon" type="image/png" sizes="32x32" href="/github.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>

          <script async defer data-domain="1313labs.com" src="https://plausible.io/js/plausible.js"></script>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
