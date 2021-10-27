import React from "react";
import * as S from "./styles";

export default function Menu({ logo }) {
  return (
    <S.Container>
      <S.Wrapper>
        <a href="">
          <S.Logo src={logo} alt="Logo de táxi amarelo" />
        </a>

        <S.Navigation>
          <S.Link href="">Home</S.Link>
          <S.Link href="">Taxi</S.Link>
          <S.Link href="">Booking</S.Link>
          <S.Link href="">Contact Us</S.Link>
        </S.Navigation>
      </S.Wrapper>
    </S.Container>
  );
}