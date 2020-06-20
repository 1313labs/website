import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const bgOptions = ["main-bg--summer", "main-bg--winter", "main-bg--spring", "main-bg--fall"];

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const bgRandomOption = bgOptions[parseInt(bgOptions.length * Math.random())];

    return (
      <Html lang="en">
        <Head />

        <body className={`main-bg ${bgRandomOption}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
