import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      uloaxdata {
        footers {
          about
          address
          booking
          contact
          facebook
          facebookicon {
            url
          }
          follow
          home
          imglist {
            url
          }
          instagram
          instagramicon {
            url
          }
          linkedin
          linkedinicon {
            url
          }
          links
          lorem
          newsletter
          subscribe
          taxi
          twitter
          twittericon {
            url
          }
          youtube
          youtubeicon {
            url
          }
        }
      }
    }
  `);

  const query = data.uloaxdata.footers[0];
  
  return (
    <h2>Footer</h2>
  );
}