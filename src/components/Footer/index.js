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
<S.Container>
      <S.Boxaddress>
        <S.Titleaddress>{query.address}</S.Titleaddress>
        <S.Paragraphaddress>{query.lorem}</S.Paragraphaddress>
      </S.Boxaddress>
      <S.Boxlinks>
        <S.Titlelinks>{query.links}</S.Titlelinks>
        <div>
          <S.Linkimg src={query.imglist.url}/>
          <S.Paragraphlinks>{query.home}</S.Paragraphlinks>
          <S.Linkimg src={query.imglist.url}/>
          <S.Paragraphlinks>{query.about}</S.Paragraphlinks>
          <S.Linkimg src={query.imglist.url}/>
          <S.Paragraphlinks>{query.taxi}</S.Paragraphlinks>
          <S.Linkimg src={query.imglist.url}/>
          <S.Paragraphlinks>{query.booking}</S.Paragraphlinks>
          <S.Linkimg src={query.imglist.url}/>
          <S.Paragraphlinks>{query.contact}</S.Paragraphlinks>
        </div>
      </S.Boxlinks>
      <div>
        <S.Titlefollow>{query.follow}</S.Titlefollow>
        <div>
          <S.Followimg src={query.facebookicon.url}/>
          <S.Paragraphfollow>{query.facebook}</S.Paragraphfollow>
          <S.Followimg src={query.twittericon.url}/>
          <S.Paragraphfollow>{query.twitter}</S.Paragraphfollow>
          <S.Followimg src={query.linkedinicon.url}/>
          <S.Paragraphfollow>{query.linkedin}</S.Paragraphfollow>
          <S.Followimg src={query.youtubeicon.url}/>
          <S.Paragraphfollow>{query.youtube}</S.Paragraphfollow>
          <S.Followimg src={query.instagramicon.url}/>
          <S.Paragraphfollow>{query.instagram}</S.Paragraphfollow>
        </div>
      </div>
      <S.Boxnew>
        <S.Titlenew>{query.newsletter}</S.Titlenew>
        <S.Inputnew type="email" placeholder="Enter Your Email"/>
        <S.btn>{query.subscribe}</S.btn>
      </S.Boxnew>
    </S.Container>
  );
}