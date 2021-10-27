import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

import Menu from "../Menu";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      uloaxdata {
        headers {
          bookacity
          booking
          booknow
          btnleft
          btnright
          contact
          imgtaxi {
            url
          }
          imgtaxiamerica {
            url
          }
          youreveryday
          taxi
          home
          logo {
            url
          }
          search
        }
      }
    }
  `);

  const query = data.uloaxdata.headers[0];

  return (
    <>
      <Menu logo={query.logo.url} />

      <S.Container>
        <h1>HEADER</h1>
      </S.Container>
    </>
  );
}