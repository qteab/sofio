"use client";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.midnight};
  padding: 80px 20px 20px;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 80px 40px;
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-areas: "one two . three";
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const TextSection = styled.div<{ $area?: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr;
    grid-area: ${({ $area }) => $area};
    max-width: 400px;
  }
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 100px;
  gap: 40px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    text-align: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    gap: 0;
    grid-template-columns: 2fr 1fr 2fr;

    p {
      text-align: right;
    }
  }
`;

export {
  Wrapper,
  TextContainer,
  TextSection,
  BottomSection,
  Divider,
  LogoContainer,
};
