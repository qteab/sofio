"use client";
import React from "react";
import * as S from "./TextAndMedia.styled";
import { H3, Paragraph } from "@/styles/typography";
import { BlockContainer, Image } from "@/styles/components";

export interface ITextAndMediaProps {
  media: string;
  title: string;
  text: string;
}

const TextAndMedia: React.FC<ITextAndMediaProps> = ({ media, title, text }) => {
  return (
    <BlockContainer>
      <S.ImageContainer>
        <Image src={media} />
      </S.ImageContainer>

      <S.TextContainer>
        <H3>{title}</H3>
        <Paragraph>{text}</Paragraph>
      </S.TextContainer>
    </BlockContainer>
  );
};

export default TextAndMedia;
