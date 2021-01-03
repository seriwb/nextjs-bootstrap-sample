import * as application from "../../../constants/application";

import { Footer } from "./Footer";
import { GlobalStyle } from "./Styles";
import Head from "next/head";
import { Header } from "./Header";
import React from "react";
import { Sidebar } from "./Sidebar";

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
    </Head>
    <GlobalStyle />

    <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">{children}</main>
        <Footer />
      </div>
    </div>
  </>
);
