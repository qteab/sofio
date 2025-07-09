"use client";
import React from "react";
import * as S from "./Statistics.styled";
import { Button } from "@/styles/components";
import { H2, Paragraph } from "@/styles/typography";
import { useScrollProgress } from "./useScrollProgress";
import { circleData } from "./circleData";

export interface IStatisticsProps {
  title?: string;
  firstStatText?: string;
  secondStatText?: string;
  finalText?: string;
  bottomTitleRow1?: string;
  bottomTitleRow2?: string;
  bottomText?: string;
  linkTitle?: string;
  linkUrl?: string;
}

const Statistics: React.FC<IStatisticsProps> = ({
  title,
  firstStatText,
  secondStatText,
  finalText,
  bottomTitleRow1,
  bottomTitleRow2,
  bottomText,
  linkTitle,
  linkUrl,
}) => {
  const { showFirstStat, showSecondStat, showFinalText } = useScrollProgress(
    "stat-block-container"
  );
  const { totalCircles, prediabetesCircles, unknowingCircles } = circleData();

  const circles = Array.from({ length: totalCircles }, (_, i) => i);

  const getAnimationDelay = (index: number): number => {
    if (showFirstStat && prediabetesCircles.includes(index)) {
      return prediabetesCircles.indexOf(index) * 15;
    }
    if (showSecondStat && unknowingCircles.includes(index)) {
      return unknowingCircles.indexOf(index) * 5;
    }
    return 0;
  };

  return (
    <S.StatBlockContainer id="stat-block-container">
      <H2>{title}</H2>
      <S.StickyWrapper>
        <S.ContentWrapper>
          <S.TextSection $isVisible={showFirstStat}>
            <Paragraph>{firstStatText}</Paragraph>
          </S.TextSection>

          <S.TextSection $isVisible={showSecondStat}>
            <Paragraph>{secondStatText}</Paragraph>
          </S.TextSection>

          <S.CircleGrid>
            {circles.map((index) => (
              <S.Circle
                key={index}
                $isPrediabetes={prediabetesCircles.includes(index)}
                $isUnknowing={unknowingCircles.includes(index)}
                $showFirstStat={showFirstStat}
                $showSecondStat={showSecondStat}
                $animationDelay={getAnimationDelay(index)}
              />
            ))}
          </S.CircleGrid>

          <S.TextSection $isVisible={showFinalText}>
            <Paragraph>{finalText}</Paragraph>
          </S.TextSection>
        </S.ContentWrapper>

        <S.BottomSection>
          <Paragraph color="teal" $fontSizeMobile="48px" $fontSize="64px">
            {bottomTitleRow1}
          </Paragraph>
          <Paragraph color="midnight" $fontSizeMobile="48px" $fontSize="64px">
            {bottomTitleRow2}
          </Paragraph>
          <S.ContentWrapper>
            <Paragraph>{bottomText}</Paragraph>

            <Button
              label={linkTitle}
              secondary
              margin="80px auto auto"
              url={linkUrl}
            />
          </S.ContentWrapper>
        </S.BottomSection>
      </S.StickyWrapper>
    </S.StatBlockContainer>
  );
};

export default Statistics;
