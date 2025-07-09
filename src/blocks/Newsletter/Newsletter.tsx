"use client";
import React from "react";
import * as S from "./Newsletter.styled";
import { H3 } from "@/styles/typography";
import { Input } from "@/styles/components";

export interface INewsletterProps {
  title: string;
}

const Newsletter: React.FC<INewsletterProps> = ({ title }) => {
  return (
    <>
      <S.Wrapper>
        <H3 color="midnight">{title}</H3>
        <Input
          type="email"
          placeholder="Enter your email"
          name={"newsletter"}
          label={""}
          mobileWidth={"100%"}
          width={"410px"}
          arrowButton
        />
      </S.Wrapper>
    </>
  );
};

export default Newsletter;
