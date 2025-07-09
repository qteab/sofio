import styled from "styled-components";
import type { CircleProps, TextSectionProps } from "./types";

const StatBlockContainer = styled.div`
  min-height: 500vh;
  position: relative;

  h2 {
    margin-top: 80px;
    margin-left: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    h2 {
      margin-top: 80px;
      margin-left: 40px;
    }
  }
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 100px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 590px;
  margin: 0 auto;
  padding-top: 40px;
`;

const GridTitle = styled.div`
  height: 45px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  p {
    width: 100%;
  }
`;

const CircleGrid = styled.div`
  width: 590px;
  max-width: calc(100vw - 40px);
  aspect-ratio: 1 / 1;
  margin: 40px auto 80px;
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(10, 1fr);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    gap: 10px;
    margin: auto;
    margin-bottom: 80px;
  }
`;

const Circle = styled.div<CircleProps>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: background-color 0.5s ease-in-out;
  transition-delay: ${(props) => props.$animationDelay}ms;
  background-color: ${({
    theme,
    $showSecondStat,
    $isUnknowing,
    $showFirstStat,
    $isPrediabetes,
  }) =>
    theme.colors[
      $showSecondStat && $isUnknowing
        ? "tangerine"
        : $showFirstStat && $isPrediabetes
        ? "midnight"
        : "skyBlue"
    ]};
`;

const TextSection = styled.div<TextSectionProps>`
  transition: all 0.2s ease-in-out;
  transition-delay: ${(props) => props.$delay || 0}ms;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  margin: 0 20px 8px;
  text-align: left;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: auto;
    margin-bottom: 8px;
  }
`;

const BottomSection = styled.div`
  text-align: center;
  padding: 80px 20px;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #d6e6ea 100%);

  @media screen and (min-width: 768px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`;

export {
  StatBlockContainer,
  StickyWrapper,
  ContentWrapper,
  GridTitle,
  CircleGrid,
  Circle,
  TextSection,
  BottomSection,
};
