import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Models() {
  const data = useStaticQuery(graphql`
    query {
      uloaxdata {
        mains {
          one
          two
          three
          ourtaxi
          actthat
          car1
          car2
          car3
          car {
            url
          }
        }
      }
    }
  `);

  const query = data.uloaxdata.mains[0];
  const title = query.ourtaxi.split(" ");

  const content = [
    { 
      text: query.car1,
      id: query.one
    },
    {
      text: query.car2,
      id: query.two
    },
    {
      text: query.car3,
      id: query.three
    }
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          {title[0]}
          <span> {title[1]}</span>
        </S.Title>

        <S.Content>
          {content.map((card, i) => (
            <S.Card key={i} cardId={card.id}>
              <S.Info>
                <S.Text>{card.text}</S.Text>
                <S.Paragraph>{query.actthat}</S.Paragraph>
              </S.Info>
              <S.Car src={query.car.url} alt="Táxi amarelo" />
            </S.Card>
          ))}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}