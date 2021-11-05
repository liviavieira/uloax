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

          <S.Taxi>
            <S.Contact>
              {query.booknow.slice(0,8)}
              <span> (+71) 1234567890</span>
            </S.Contact>
            <Slider
              left={query.btnleft}
              right={query.btnright}
            >
              <S.Img src={query.imgtaxiamerica.url} alt="Yellow taxi with America sticker"/>
              <S.Img src={query.imgtaxi.url} alt="Yellow taxi"/>
              <S.Img src={query.imgtaxi.url} alt="Yellow taxi"/>
            </Slider>
          </S.Taxi>

          <S.HireBox>
            <S.Paragraphcity>{query.bookacity}</S.Paragraphcity>
            <S.Hire>
              <S.Paragraphyou>{query.youreveryday}</S.Paragraphyou>
              <S.Takeinput type="text" placeholder="PICKUP"/>
              <S.Takeinput type="text" placeholder="DROP"/>
              <S.Takeinput type="text" placeholder="WHEN"/>
              <S.Search>{query.search}</S.Search>
            </S.Hire>
          </S.HireBox>

        </S.Wrapper>
      </S.Container>
    </>
  );
}