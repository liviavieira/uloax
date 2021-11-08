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
    accessibility: true,
    infinite: false,
    draggable: true,
    autoplay: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <S.LeftArrow arrow={left} />,
    nextArrow: <S.RightArrow arrow={right} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <Carousel {...settings}>
      {children}
    </Carousel>
  );
}