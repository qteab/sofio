"use client";
import styled from "styled-components";

const Wrapper = styled.div<{
  $textPosition?: string;
  $margin?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
  $size?: string;
}>`
  position: relative;
  height: ${({ $size }) => ($size === "large" ? "85vh" : "70vh")};

  margin-top: ${({ $margin }) => $margin?.top && "20px"};
  margin-bottom: ${({ $margin }) => $margin?.bottom && "20px"};
  margin-left: ${({ $margin }) => $margin?.left && "20px"};
  margin-right: ${({ $margin }) => $margin?.right && "20px"};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: ${({ $margin }) => $margin?.top && "40px"};
    margin-bottom: ${({ $margin }) => $margin?.bottom && "40px"};
    margin-left: ${({ $margin }) => $margin?.left && "40px"};
    margin-right: ${({ $margin }) => $margin?.right && "40px"};
  }
`;

const TextContainer = styled.div<{ $left: boolean }>`
  gap: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  justify-content: ${({ $left }) => $left && "flex-end"};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 20px;
    width: 33%;
    height: unset;
    padding: unset;
    position: absolute;
    top: ${({ $left }) => !$left && "50%"};
    bottom: ${({ $left }) => $left && "80px"};
    ${({ $left }) => ($left ? "left: 40px;" : "right: 150px;")};
    transform: ${({ $left }) => !$left && "translateY(-50%)"};
    z-index: 1;
  }
`;

export { Wrapper, TextContainer };
