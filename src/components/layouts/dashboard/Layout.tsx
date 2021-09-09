import Head from "next/head";
import React, { useState } from "react";

import * as application from "../../../constants/application";

import { Footer } from "./Footer";
import { GlobalStyle } from "./Styles";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type Props = {
  title?: string;
};

export const Layout: React.FC<Props> = ({ children, title = application.TITLE }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyle />

      <Header isNavCollapsed={isNavCollapsed} handleNavCollapse={handleNavCollapse} />
      <div className="container-fluid">
        <div className="row">
          <Sidebar isNavCollapsed={isNavCollapsed} />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
