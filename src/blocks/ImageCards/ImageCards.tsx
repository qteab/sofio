"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import * as S from "./ImageCards.styled";
import { H3, Paragraph } from "@/styles/typography";
import { BackgroundImage } from "@/styles/components";

export interface IImageCardsProps {
  images: {
    url: string;
    alt: string;
    title: string;
    text: string;
  }[];
}

const ImageCards: React.FC<IImageCardsProps> = ({ images }) => {
  const [scrollIndex, setScrollIndex] = React.useState(0);

  const imageCard = (url: string, alt: string, title: string, text: string) => (
    <S.Image>
      <BackgroundImage src={url} />
      <S.TextContainer>
        <H3 color="white">{title}</H3>
        <Paragraph color="white">{text}</Paragraph>
      </S.TextContainer>
    </S.Image>
  );

  return (
    <S.Wrapper>
      <S.Swiper
        modules={[Navigation]}
        spaceBetween={-20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
        onSlideChange={(swiper) => {
          setScrollIndex(swiper.activeIndex);
        }}
      >
        {images.map(({ url, alt, title, text }, index) => (
          <SwiperSlide key={index}>
            {imageCard(url, alt, title, text)}
          </SwiperSlide>
        ))}
      </S.Swiper>

      <S.DesktopImages>
        {images.map(({ url, alt, title, text }, index) => (
          <S.Image key={index}>
            <BackgroundImage src={url} />

            <S.TextContainer>
              <H3 color="white">{title}</H3>
              <Paragraph color="white">{text}</Paragraph>
            </S.TextContainer>
          </S.Image>
        ))}
      </S.DesktopImages>

      <S.ScrollButtons>
        <S.Button $clickable={scrollIndex === 1} className="swiper-button-prev">
          <svg
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21L1.70711 11.7071C1.31658 11.3166 1.31658 10.6834 1.70711 10.2929L11 1"
              stroke="#0E0F0F"
              strokeLinecap="round"
            />
          </svg>
        </S.Button>
        <S.Button $clickable={scrollIndex === 0} className="swiper-button-next">
          <svg
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.2929 10.2929C10.6834 10.6834 10.6834 11.3166 10.2929 11.7071L1 21"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
        </S.Button>
      </S.ScrollButtons>
    </S.Wrapper>
  );
};

export default ImageCards;
