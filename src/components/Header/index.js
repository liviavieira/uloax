import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

import Menu from "../Menu";
import Slider from "../Slider";

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
        <S.Wrapper>
          <Slider
            left={query.btnleft}
            right={query.btnright}
          >

          </Slider>
        </S.Wrapper>
      </S.Container>
    </>
  );
}