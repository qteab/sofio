"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 20px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 80px 40px;
  }
`;

const MobileCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: none;
  }
`;

const Cards = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 80px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 40px;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.skyBlue};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export { Wrapper, Cards, MobileCards, Card, ImageContainer, TextContainer };
