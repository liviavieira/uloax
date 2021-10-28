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

        <S.Sectionbox>
        <S.Boxnow>
          <S.Paragraphnow>{query.booknow}</S.Paragraphnow>
        </S.Boxnow>
        <div>
          <S.Paragraphcity>{query.bookacity}</S.Paragraphcity>
        </div>
        </S.Sectionbox>
        <S.Sectionhire>
        <S.Taxibox>
          <S.Img src={query.imgtaxi.url} alt="taxi"/>
        </S.Taxibox>
        <S.Boxtakecar>
          <S.Paragraphyou>{query.youreveryday}</S.Paragraphyou>
          <S.Takeinput type="text" placeholder="PICKUP"/>
          <S.Takeinput type="text" placeholder="DROP"/>
          <S.Takeinput type="text" placeholder="WHEN"/>
          <S.Btn>{query.search}</S.Btn>
        </S.Boxtakecar>
        </S.Sectionhire>
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