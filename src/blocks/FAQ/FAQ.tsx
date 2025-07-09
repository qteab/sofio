"use client";
import React from "react";
import * as S from "./FAQ.styled";
import { H2, H3, Paragraph } from "@/styles/typography";
import { BlockContainer } from "@/styles/components";
import { Flex } from "@/styles/global";
import { AnimatePresence, motion } from "motion/react";

export interface IFAQProps {
  sections: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  }[];
}

const FAQ: React.FC<IFAQProps> = ({ sections }) => {
  const [activeEntry, setActiveEntry] = React.useState<string | null>(null);

  return (
    <BlockContainer largeBottomMargin narrow>
      <Flex $flexDir="column" $gap={80} $width="100%" style={{ marginTop: 80 }}>
        {sections.map(({ title, items }, index) => {
          return (
            <Flex
              key={index}
              $flexDir="column"
              $mobileGap={40}
              $gap={80}
              $width="100%"
            >
              <H2 $fontSizeMobile="32px">{title}</H2>
              <Flex $flexDir="column" $width="100%">
                {items.map(({ question, answer }, itemIndex) => {
                  const isLastItem = itemIndex === items.length - 1;
                  const itemKey = `${index} + ${itemIndex}`;
                  const isOpen = activeEntry === itemKey;

                  return (
                    <S.Entry
                      key={`${question}-${itemIndex}`}
                      $borderBottom={isLastItem}
                      $active={isOpen}
                    >
                      <S.EntryHeader
                        onClick={() => setActiveEntry(isOpen ? null : itemKey)}
                      >
                        <H3 $fontSizeMobile="24px" $align="left">
                          {question}
                        </H3>
                      </S.EntryHeader>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <Paragraph style={{ marginTop: 12 }}>
                                {answer}
                              </Paragraph>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </S.Entry>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </BlockContainer>
  );
};

export default FAQ;
