import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import Models from "../components/Models";
import Features from "../components/Features";
import Download from "../components/Download";
import Footer from "../components/Footer";

const Main = styled.main``;

export default function Index() {
  return (
    <>
      <Helmet>
        <title>ULOAX</title>
        <html style='scroll-behavior: smooth'/>
      </Helmet>
      <GlobalStyle />

      <Header />
      <Main>
        <Models />
        <Features />
        {/* <Download /> */}
      </Main>
      {/* <Footer /> */}
    </>
  );
}