"use client";
import React from "react";
import * as S from "./Hero.styled";
import { H1, Paragraph } from "@/styles/typography";
import { BackgroundImage } from "@/styles/components";

export interface IHeroProps {
  media: string;
  title: string;
  text?: string;
  overlay?: boolean;
  textColor?: "white" | "black";
}

const Hero: React.FC<IHeroProps> = ({ media, title, text, overlay }) => {
  const isVideo = false;

  return (
    <S.Wrapper>
      {isVideo ? (
        <S.BackgroundVideo autoPlay loop muted playsInline>
          <source src={media} type="video/mp4" />
        </S.BackgroundVideo>
      ) : (
        <BackgroundImage src={media} />
      )}
      {overlay && <S.Overlay />}
      <S.TextContainer>
        <H1 color="white">{title}</H1>
        <Paragraph color="white">{text}</Paragraph>
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default Hero;
