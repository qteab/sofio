"use client";
import React from "react";
import * as S from "./Articles.styled";
import { H2, Paragraph } from "@/styles/typography";
import { Button, Image } from "@/styles/components";

interface IArticle {
  date?: string;
  text?: string;
  image: string;
  url?: string;
}

export interface IArticlesProps {
  title: string;
  articles: IArticle[];
}

const Articles: React.FC<IArticlesProps> = ({ title, articles }) => {
  const renderArticles = (
    { image, date, text, url }: IArticle,
    index: number
  ) => {
    return (
      <S.Card key={index}>
        <S.ImageContainer>
          <Image src={image} />
        </S.ImageContainer>

        <S.TextContainer>
          {date && <Paragraph>{date}</Paragraph>}
          <Paragraph>{text}</Paragraph>
        </S.TextContainer>

        <Button url={url} label="Read more" />
      </S.Card>
    );
  };

  return (
    <S.Wrapper>
      <H2>{title}</H2>
      <S.MobileCards>
        {articles.slice(0, 2).map((item, i) => renderArticles(item, i))}
      </S.MobileCards>
      <S.Cards>{articles.map((item, i) => renderArticles(item, i))}</S.Cards>
    </S.Wrapper>
  );
};

export default Articles;
