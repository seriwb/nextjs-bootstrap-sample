import Head from "next/head";
import React from "react";

import * as application from "../../../constants/application";

import { Footer } from "./Footer";
import { GlobalStyle } from "./Styles";
import { Header } from "./Header";
import { Navigator } from "./Navigator";

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

      {/* Custom styles for this template */}
      <link
        href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyle />

    <div className="container">
      <Header />
      <Navigator />
    </div>
    <main className="container">{children}</main>
    <Footer />
  </>
);
