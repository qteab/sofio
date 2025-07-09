"use client";
import styled from "styled-components";
import { Swiper as SwiperBase } from "swiper/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 40px 0;
    width: 100%;
  }
`;

const DesktopImages = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: flex;
    gap: 40px;
    margin: 0 40px;
  }
`;

const Swiper = styled(SwiperBase)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: none;
  }
`;

const ScrollButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 40px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: none;
  }
`;

const Button = styled.button<{ $clickable: boolean }>`
  left: 0;
  width: 41px;
  height: 41px;
  border-radius: 50%;
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

const Image = styled.div`
  border-radius: 10px;
  aspect-ratio: 400 / 691;
  width: calc(100% - 40px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 50%;
    aspect-ratio: 900 / 990;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 80px 40px;
  }
`;

export {
  Wrapper,
  DesktopImages,
  Swiper,
  ScrollButtons,
  Button,
  Image,
  TextContainer,
};
