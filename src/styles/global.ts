import styled, { createGlobalStyle, css } from "styled-components";
import { addPxSuffix } from "../helpers";
import { DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
  }


  
  body {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const MainSection = styled.section`
  width: 100%;
  margin: 50px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 100px 0;
  }
`;

export const MainInner = styled.div<{
  horizontal?: boolean;
  height?: number | string;
  minHeight?: number | string;
}>`
  width: 100vw;
  max-width: 1500px;
  position: relative;
  height: ${({ height }) => addPxSuffix(height || "100%")};
  min-height: ${({ minHeight }) => addPxSuffix(minHeight || "auto")};
  padding-left: 104px;
  padding-right: 104px;
  padding-bottom: ${({ horizontal }) => (horizontal ? "0" : "128px")};
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-left: 104px;
    padding-right: 104px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: ${({ horizontal }) => (horizontal ? "0" : "72px")};
  }
`;

type Props = {
  $breakpoint?: keyof DefaultTheme["breakpoints"];

  $flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  $flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  $align?: keyof DefaultTheme["align"];
  $justify?: keyof DefaultTheme["justify"];
  $width?: string | number;
  $height?: string | number;
  $gap?: number;

  $mobileFlexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  $mobileFlexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  $mobileAlign?: keyof DefaultTheme["align"];
  $mobileJustify?: keyof DefaultTheme["justify"];
  $mobileWidth?: string | number;
  $mobileHeight?: string | number;
  $mobileGap?: number;
};

export const Flex = styled.div<Props>`
  ${({
    $height,
    $width,
    $flexDir,
    $align,
    $justify,
    $gap,
    $flexWrap,
    $mobileFlexWrap,
    $mobileFlexDir,
    $mobileAlign,
    $mobileJustify,
    $mobileWidth,
    $mobileHeight,
    $mobileGap,
    $breakpoint,
    theme,
  }) => css`
    display: flex;

    height: ${addPxSuffix($height || "auto")};
    width: ${addPxSuffix($width || "auto")};
    flex-direction: ${$flexDir || "row"};
    align-items: ${$align ? theme.align[$align] : "flex-start"};
    justify-content: ${$justify ? theme.justify[$justify] : "flex-start"};
    gap: ${addPxSuffix($gap || 0)};
    ${$flexWrap ?? `flex-wrap: ${$flexWrap}; `}

    @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints[$breakpoint || "l"]}) {
      ${$mobileHeight && `height: ${addPxSuffix($mobileHeight)};`}
      ${$mobileWidth && `width: ${addPxSuffix($mobileWidth)};`}
      ${$mobileFlexDir && `flex-direction: ${$mobileFlexDir};`}
      ${$mobileAlign && `align-items: ${theme.align[$mobileAlign]};`}
      ${$mobileJustify && `justify-content: ${theme.justify[$mobileJustify]};`}
      ${$mobileGap && `gap: ${addPxSuffix($mobileGap)};`}
      ${$mobileFlexWrap ?? `flex-wrap: ${$mobileFlexWrap}; `}
    }
  `}
`;

export type Margin = {
  spacing?: keyof DefaultTheme["spacing"];
  vertical?: keyof DefaultTheme["spacing"];
  horizontal?: keyof DefaultTheme["spacing"];
  $top?: keyof DefaultTheme["spacing"];
  $bottom?: keyof DefaultTheme["spacing"];
  $left?: keyof DefaultTheme["spacing"];
  $right?: keyof DefaultTheme["spacing"];
};

export function styledMargin(props: Margin & { theme: DefaultTheme }) {
  return css`
    margin-top: ${props.$top
      ? props.theme.spacing[props.$top]
      : props.vertical
      ? props.theme.spacing[props.vertical]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-bottom: ${props.$bottom
      ? props.theme.spacing[props.$bottom]
      : props.vertical
      ? props.theme.spacing[props.vertical]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-left: ${props.$left
      ? props.theme.spacing[props.$left]
      : props.horizontal
      ? props.theme.spacing[props.horizontal]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
    margin-right: ${props.$right
      ? props.theme.spacing[props.$right]
      : props.horizontal
      ? props.theme.spacing[props.horizontal]
      : props.spacing
      ? props.theme.spacing[props.spacing]
      : 0};
  `;
}

export const Margin = styled.div<Margin>`
  ${styledMargin}
`;

export default GlobalStyle;
