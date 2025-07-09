"use client";
import React from "react";
import { H3 } from "@/styles/typography";
import { Flex } from "@/styles/global";
import { BlockContainer, Image } from "@/styles/components";

export interface IImagesProps {
  images: {
    url: string;
    text: string;
  }[];
}

const Images: React.FC<IImagesProps> = ({ images }) => {
  return (
    <BlockContainer>
      <Flex $mobileFlexDir="column" $flexDir="row" $gap={40}>
        {images.map(({ url, text }, index) => (
          <Flex key={index} $flexDir="column" $mobileGap={20} $gap={40}>
            <Image src={url} aspectRatio={"400 / 266"} height={"unset"} />

            <H3>{text}</H3>
          </Flex>
        ))}
      </Flex>
    </BlockContainer>
  );
};

export default Images;
