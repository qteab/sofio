"use client";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  gap: 40px;
  scroll-margin: 180px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 20px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 80px 0;
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
  min-height: 102px;

  p {
    max-lines: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

const ScrollButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 40px;
  position: relative;
`;

const Button = styled.button<{ $clickable: boolean }>`
  left: 0;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $clickable }) =>
    $clickable ? theme.colors.black : "transparent"};
  border: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  opacity: 1 !important;
  pointer-events: ${({ $clickable }) => ($clickable ? "auto" : "none")};

  transition: all 0.2s ease-in-out;

  svg {
    height: 20px;
    width: 10px;

    path {
      stroke: ${({ theme, $clickable }) =>
        $clickable ? theme.colors.white : theme.colors.black};
    }
  }

  &::after {
    content: "";
  }
`;

export { Cards, Card, ImageContainer, TextContainer, ScrollButtons, Button };
