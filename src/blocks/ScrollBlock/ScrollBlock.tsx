"use client";
import React from "react";
import * as S from "./ScrollBlock.styled";
import { H3, Paragraph } from "@/styles/typography";
import { Flex } from "@/styles/global";
import { motion, useInView } from "motion/react";
import { Image } from "@/styles/components";
import { StaticImageData } from "next/image";

export interface IScrollBlockProps {
  items: {
    title: string;
    text: string;
    image: StaticImageData;
  }[];
}

const ScrollBlock: React.FC<IScrollBlockProps> = ({ items }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeContent = items[activeIndex];

  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.5;

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = itemTop + rect.height;

        if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
          if (activeIndex !== index) {
            setActiveIndex(index);
          }
        }
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <S.Wrapper ref={containerRef} $isInView={isInView}>
      <S.Background>
        <S.ActiveContent
          as={motion.div}
          key={activeIndex}
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(2px)" }}
          transition={{ duration: 0.5, ease: "easeInOut", stiffness: 300 }}
        >
          <Flex $flexDir="column" $justify="center" $gap={12}>
            <H3>{activeContent.title}</H3>
            <Paragraph>{activeContent.text}</Paragraph>
          </Flex>
          <S.Image src={activeContent.image.src} />
        </S.ActiveContent>
        <Flex
          $flexDir="column"
          $gap={20}
          $width={"100%"}
          $height={"100%"}
          $align="end"
          $justify="center"
        >
          {items.map((_, index) => (
            <S.ScrollIndicator key={index} $active={activeIndex === index} />
          ))}
        </Flex>
      </S.Background>
      <S.Items>
        {items.map((_, index) => (
          <S.Item
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            $middle={index === 1}
          />
        ))}
      </S.Items>
    </S.Wrapper>
  );
};

export default ScrollBlock;
