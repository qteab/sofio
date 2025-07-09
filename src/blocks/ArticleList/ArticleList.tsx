"use client";
import React, { useEffect } from "react";
import * as S from "./ArticleList.styled";
import { Paragraph } from "@/styles/typography";
import { BlockContainer, Button, Image } from "@/styles/components";

interface IArticle {
  date?: string;
  text?: string;
  image: string;
  url?: string;
}

export interface IArticleListProps {
  title?: string;
  articles: IArticle[];
}

const ArticleList: React.FC<IArticleListProps> = ({ articles }) => {
  const [page, setPage] = React.useState(0);
  const [maxPage, setMaxPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(8);
  const [pageArticles, setPageArticles] = React.useState<IArticle[]>([]);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setPageSize(isMobile ? 4 : 8);
      setIsMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      setMaxPage(Math.ceil(articles.length / pageSize) - 1);
    }

    if (articles.length > 0) {
      const start = page * pageSize;
      const end = start + pageSize;
      setPageArticles(articles.slice(start, end));
    } else {
      setPageArticles([]);
    }
  }, [articles, page, pageSize]);

  const handleClick = (next: boolean) => {
    if (next) {
      if (page < maxPage) {
        setPage(page + 1);
      }
    } else {
      if (page > 0) {
        setPage(page - 1);
      }
    }

    if (isMobile) {
      // Scroll to the top of the articles section on mobile
      const articlesSection = document.getElementById("articles");
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <BlockContainer>
      <S.Cards id="articles">
        {pageArticles.map(({ date, text, image, url }, index) => {
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
        })}
      </S.Cards>

      <S.ScrollButtons>
        <S.Button $clickable={page !== 0} onClick={() => handleClick(false)}>
          <svg
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21L1.70711 11.7071C1.31658 11.3166 1.31658 10.6834 1.70711 10.2929L11 1"
              stroke="#0E0F0F"
              strokeLinecap="round"
            />
          </svg>
        </S.Button>
        <S.Button
          $clickable={page !== maxPage}
          onClick={() => handleClick(true)}
        >
          <svg
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.2929 10.2929C10.6834 10.6834 10.6834 11.3166 10.2929 11.7071L1 21"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
        </S.Button>
      </S.ScrollButtons>
    </BlockContainer>
  );
};

export default ArticleList;
