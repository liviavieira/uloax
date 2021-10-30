import React from "react";
import Carousel from "react-slick";

import * as S from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({
  children,
  left,
  right
}) {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <S.LeftArrow arrow={left} />,
    nextArrow: <S.RightArrow arrow={right} />
  };

  return (
    <Carousel {...settings}>
      {children}
    </Carousel>
  );
}