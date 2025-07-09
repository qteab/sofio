"use client";
import styled, { css, DefaultTheme } from "styled-components";
import { addPxSuffix } from "../helpers";

type Props = {
  color?: keyof DefaultTheme["colors"];
  $align?: "left" | "center" | "right";
  ref?: React.Ref<any>;
  $maxWidth?: string | number;
  $hidden?: boolean;
  $fontSize?: string;
  $fontSizeMobile?: string;
  htmlFor?: string;
};

export const H1 = styled.h1<Props>`
  font-family: "Erik Text";
  font-weight: 400;
  line-height: 115%;
  color: ${({ theme, color }) => theme.colors[color || "black"]};
  max-width: ${({ $maxWidth }) => addPxSuffix($maxWidth || "none")};
  font-size: ${({ $fontSize }) => $fontSize || "64px"};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ $fontSizeMobile }) => $fontSizeMobile || "48px"};
  }
`;

export const H2 = styled.h2<Props>`
  font-family: "Erik Text";
  font-weight: 400;
  line-height: 115%;
  color: ${({ theme, color }) => theme.colors[color || "black"]};
  max-width: ${({ $maxWidth }) => addPxSuffix($maxWidth || "none")};
  font-size: ${({ $fontSize }) => $fontSize || "64px"};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ $fontSizeMobile }) => $fontSizeMobile || "48px"};
  }
`;

export const H3 = styled.h3<Props>`
  font-family: "Erik Text";
  font-weight: 400;
  line-height: 115%;
  color: ${({ theme, color }) => theme.colors[color || "black"]};
  max-width: ${({ $maxWidth }) => addPxSuffix($maxWidth || "none")};

  font-size: ${({ $fontSize }) => $fontSize || "32px"};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ $fontSizeMobile }) => $fontSizeMobile || "32px"};
  }
`;

export const Paragraph = styled.p<Props>`
  font-family: "Erik Text";
  font-weight: 400;
  line-height: 115%;
  font-size: ${({ $fontSize }) => $fontSize || "18px"};
  color: ${({ theme, color }) => theme.colors[color || "black"]};
  max-width: ${({ $maxWidth }) => addPxSuffix($maxWidth || "none")};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ $fontSizeMobile }) => $fontSizeMobile || "18px"};
  }
`;

export const WysiwygCss = css`
  p {
    font-family: "Erik Text";
    font-weight: 400;
    line-height: 115%;
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
  }
  h1 {
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    margin-left: 40px;
  }

  a {
    transition: border-bottom 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    margin: 0;
    padding: 0;
    border-left: 4px solid ${({ theme }) => theme.colors.black};
    padding-left: 20px;
  }

  strong {
    font-family: "Erik Text";
  }

  em {
    font: "Erik Text" italic;
  }
`;

export const Wysiwyg = styled.div<Props>`
  ${WysiwygCss}

  * {
    color: ${({ theme, color }) => theme.colors[color || "black"]};
    max-width: ${({ $maxWidth }) => addPxSuffix($maxWidth || "none")};
    line-height: 140%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 110%;
  }
`;
