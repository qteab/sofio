"use client";
import React from "react";
import * as S from "./Text.styled";
import { H2, H3, Paragraph } from "@/styles/typography";

export interface ITextProps {
  title: string;
  text: string;
  layout?: "default" | "centered";
}

const Text: React.FC<ITextProps> = ({ title, text, layout }) => {
  return (
    <S.Wrapper $layout={layout}>
      {layout !== "centered" ? (
        <H3 color="black">{title}</H3>
      ) : (
        <H2 color="black" $align="center">
          {title}
        </H2>
      )}
      <Paragraph
        color="black"
        $align={layout === "centered" ? "center" : "left"}
      >
        {text}
      </Paragraph>
    </S.Wrapper>
  );
};

export default Text;
