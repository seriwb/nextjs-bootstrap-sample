import Head from "next/head";
import React from "react";
import styled from "styled-components";

import * as application from "../../../constants/application";

import { Footer } from "./Footer";
import { GlobalStyle } from "./Styles";
import { Header } from "./Header";

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
    <S_Main className="container">
      {children}
      <Footer />
    </S_Main>
  </>
);

// ------------ Style settings ------------
const S_Main = styled.main`
  max-width: 960px;
`;
