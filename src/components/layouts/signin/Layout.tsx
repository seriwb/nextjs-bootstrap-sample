import * as application from "../../../constants/application";

import { Footer } from "./Footer";
import { GlobalStyle } from "./Styles";
import Head from "next/head";
import { Header } from "./Header";
import React from "react";

type Props = {
  title?: string;
};

export const Layout: React.FC<Props> = ({ children, title = application.TITLE }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <style>
        {`
          #__next { width: 100% }
        `}
      </style>
    </Head>
    <GlobalStyle />

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
