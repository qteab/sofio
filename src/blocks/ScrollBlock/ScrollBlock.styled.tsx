"use client";
import { motion } from "motion/react";
import styled from "styled-components";

const Wrapper = styled.div<{ $isInView?: boolean }>`
  position: relative;
  height: 500vh;
  transition: all 1s ease-in-out;
  opacity: ${({ $isInView }) => ($isInView ? 1 : 0)};
  top: ${({ $isInView }) => ($isInView ? "0px" : "40px")};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
  }
`;

const Background = styled(motion.div)`
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  width: 100%;
  background: linear-gradient(180deg, #d6e6ea 0%, #8da3a8 100%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    top: 0px;
    height: 100vh;
  }
`;

const Items = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Item = styled.div<{ $middle: boolean }>`
  height: ${({ $middle }) => ($middle ? "200vh" : "150vh")};
  position: relative;
  width: 100%;
  z-index: -1;
`;

const ActiveContent = styled.div`
  position: absolute;
  padding: 40px 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    height: 550px;
    width: 100%;
    max-width: 1500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: calc(100% - 400px);
    gap: 129px;
  }
`;

const Image = styled.div`
  max-height: 45vh;
  aspect-ratio: 400 / 850;
  background-size: cover;
  background-position: center;
  margin: auto;
  margin-bottom: 0;
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 100%;
    aspect-ratio: 400 / 850;
    margin: unset;
    max-height: unset;
  }
`;

const ScrollIndicator = styled.button<{ $active: boolean }>`
  width: 5px;
  height: 40px;
  margin: 0 20px;
  border-radius: 40px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.midnight : "transparent"};
  border: 1px solid ${({ theme }) => theme.colors.midnight};
  transition: opacity 0.3s ease-in-out;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 0 40px;
  }
`;

export {
  Wrapper,
  Background,
  Items,
  Item,
  ActiveContent,
  Image,
  ScrollIndicator,
};
