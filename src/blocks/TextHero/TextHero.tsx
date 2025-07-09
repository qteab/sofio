"use client";
import React from "react";
import { H1 } from "@/styles/typography";
import { BlockContainer } from "@/styles/components";

export interface ITextHeroProps {
  title: string;
}

const TextHero: React.FC<ITextHeroProps> = ({ title }) => {
  return (
    <BlockContainer largeTopMargin>
      <H1>{title}</H1>
    </BlockContainer>
  );
};

export default TextHero;
