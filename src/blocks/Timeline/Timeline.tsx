"use client";
import React from "react";
import * as S from "./Timeline.styled";
import { H2, Paragraph } from "@/styles/typography";

export interface ITimelineProps {
  title?: string;
  years: {
    date: string;
    text: string;
    image?: string;
  }[];
}

const Timeline: React.FC<ITimelineProps> = ({ title, years }) => {
  return (
    <S.Wrapper>
      <H2>{title}</H2>

      <S.Timeline>
        {years.map(({ date, image, text }, index) => {
          return (
            <S.Entry key={index}>
              <S.Date>{date}</S.Date>
              <S.TextContainer>
                {image && <S.Image src={image} />}
                <Paragraph>{text}</Paragraph>
              </S.TextContainer>
            </S.Entry>
          );
        })}
      </S.Timeline>
    </S.Wrapper>
  );
};

export default Timeline;
