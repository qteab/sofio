"use client";
import React, { useRef, useState, useEffect } from "react";
import * as S from "./InfoGrid.styled";
import { H2, H3, Paragraph } from "@/styles/typography";
import { BackgroundImage, Desktop, Image, Mobile } from "@/styles/components";
import { Background } from "../ScrollBlock/ScrollBlock.styled";

export interface IInfoGridProps {
  ingress?: string;
  title?: string;
  items: {
    title: string;
    text: string;
    image: string;
  }[];
  bottomSection?: {
    title: string;
    text: string;
    image: string;
  };
}

const InfoGrid: React.FC<IInfoGridProps> = ({
  ingress,
  title,
  items,
  bottomSection,
}) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1 && entry.isIntersecting) {
            setInViewStates((prev) => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Ingress>
          <Paragraph color="white" $maxWidth={900}>
            {ingress}
          </Paragraph>
          <S.Divider />
        </S.Ingress>

        <H2 color="white">{title}</H2>

        <S.Grid>
          {items.map(({ image, title, text }, index) => {
            const isEven = index % 2 === 0;
            const isInView = inViewStates[index];
            return (
              <S.Item
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                $isInView={isInView}
              >
                {isEven && (
                  <Desktop>
                    <Image src={image} />
                  </Desktop>
                )}
                <Mobile>
                  <Image src={image} />
                </Mobile>
                <S.TextContainer $even={isEven}>
                  <H3 color="white">{title}</H3>
                  <Paragraph color="white">{text}</Paragraph>
                </S.TextContainer>
                {!isEven && (
                  <Desktop>
                    <Image src={image} />
                  </Desktop>
                )}
              </S.Item>
            );
          })}
        </S.Grid>
      </S.Wrapper>

      {bottomSection && (
        <S.BottomSection>
          <S.TextContainer>
            <H3 color="white">{bottomSection?.title}</H3>
            <Paragraph color="white">{bottomSection?.text}</Paragraph>
          </S.TextContainer>
          {/* should be a video */}
          <Image src={bottomSection.image} />
        </S.BottomSection>
      )}
    </>
  );
};

export default InfoGrid;
