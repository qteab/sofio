"use client";
import React from "react";
import { H2, H3, Paragraph } from "@/styles/typography";
import { Flex } from "@/styles/global";
import { BlockContainer } from "@/styles/components";
import * as S from "./Numbers.styled";
import { useInView } from "motion/react";

export interface INumbersProps {
  title: string;
  text: string;
  items: {
    title: string;
    text: string;
  }[];
}

const Numbers: React.FC<INumbersProps> = ({ title, text, items }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <BlockContainer largeTopMargin largeBottomMargin>
      <S.TextContainer>
        <H3>{title}</H3>

        <Paragraph>{text}</Paragraph>
      </S.TextContainer>

      <S.NumbersContainer ref={containerRef} $isInView={isInView}>
        {items.map(({ title, text }, index) => (
          <Flex
            key={index}
            $flexDir="column"
            $mobileGap={20}
            $gap={40}
            $width={"100%"}
          >
            <H2>{title}</H2>
            <Paragraph>{text}</Paragraph>
          </Flex>
        ))}
      </S.NumbersContainer>
    </BlockContainer>
  );
};

export default Numbers;
