"use client";
import React from "react";
import * as S from "./TextOnMedia.styled";
import { H3, Paragraph } from "@/styles/typography";
import { Button } from "@/styles/components";

export interface ITextOnMediaProps {
  media?: string;
  title: string;
  text: string;
  button?: {
    label: string;
    link: string;
  };
  settings: {
    textPosition: "left" | "right";
    textColor: "white" | "black";
    margin?: {
      top: boolean;
      bottom: boolean;
      left: boolean;
      right: boolean;
    };
    size: "small" | "large";
  };
}

const TextOnMedia: React.FC<ITextOnMediaProps> = ({
  media,
  title,
  text,
  button,
  settings,
}) => {
  const { textPosition, textColor, margin, size } = settings;
  return (
    <S.Wrapper $textPosition={textPosition} $margin={margin} $size={size}>
      <img
        src={media}
        alt={title}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />

      <S.TextContainer $left={textPosition === "left"}>
        <H3 color={textColor}>{title}</H3>
        <Paragraph color={textColor}>{text}</Paragraph>

        {button && <Button label="Read more" noBorder />}
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default TextOnMedia;
