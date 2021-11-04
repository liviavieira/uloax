import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Download() {
  const data = useStaticQuery(graphql`
    query {
      uloaxdata {
        mains {
          backgroundmain {
            url
          }
          download
          app
          imgphone {
            url
          }
        }
      }
    }
  `);

  const query = data.uloaxdata.mains[0];

  return (
    <S.Container bg={query.backgroundmain.url}>
      <S.Wrapper>
        <S.Title>
          {query.download}
          <span> {query.app}</span>
        </S.Title>
        <S.Phone src={query.imgphone.url} alt="Cell phone showing the locations of nearby taxis" />
      </S.Wrapper>
    </S.Container>
  );
}