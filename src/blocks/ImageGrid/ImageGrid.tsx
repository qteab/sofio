"use client";
import React from "react";
import { H3, Paragraph } from "@/styles/typography";
import { Flex } from "@/styles/global";
import { BlockContainer, Image } from "@/styles/components";
import * as S from "./ImageGrid.styled";

export interface IImageGridProps {
  images: {
    url: string;
    title: string;
    text: string;
  }[];
}

const ImageGrid: React.FC<IImageGridProps> = ({ images }) => {
  return (
    <BlockContainer largeTopMargin largeBottomMargin>
      <S.Wrapper>
        {images.map(({ url, title, text }, index) => (
          <Flex key={index} $flexDir="column" $mobileGap={20} $gap={40}>
            <Image src={url} aspectRatio={"400 / 266"} height={"unset"} />
            <Flex $flexDir="column" $gap={40} $mobileGap={12}>
              <H3>{title}</H3>
              <Paragraph>{text}</Paragraph>
            </Flex>
          </Flex>
        ))}
      </S.Wrapper>
    </BlockContainer>
  );
};

export default ImageGrid;
