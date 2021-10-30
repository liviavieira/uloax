import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

import Button from "../Button";

export default function Features() {
  const data = useStaticQuery(graphql`
    query {
      uloaxdata {
        mains {
          itisalong
          uloaxpocket
          whyride
          secureriders
          sheimgsecure {
            url
          }
          taxipocketsecure {
            url
          }
          pocket {
            url
          }
        }
      }
    }
  `);

  const query = data.uloaxdata.mains[0];
  const title = query.whyride.split(" ");

  const content = [
    { 
      text: query.uloaxpocket,
      img: query.pocket.url
    },
    { 
      text: query.secureriders,
      img: query.sheimgsecure.url
    },
    { 
      text: query.uloaxpocket,
      img: query.taxipocketsecure.url
    },
    { 
      text: query.secureriders,
      img: query.taxipocketsecure.url
    }
  ];
  
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          {title[0]} {title[1]}
          <span> {title[2]} {title[3]}</span>
        </S.Title>
        
        {content.map((feature, i) => {
          const isOdd = i % 2 !== 0;

          return (
            <S.Row key={i} isOdd={isOdd}>
              <S.Img src={feature.img} alt="" />
              <S.RowInfo isOdd={isOdd}>
                <S.Text>{feature.text}</S.Text>
                <S.About>{query.itisalong}</S.About>
                <Button>book now</Button>
              </S.RowInfo>
            </S.Row>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
}