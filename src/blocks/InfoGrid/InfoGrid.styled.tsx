"use client";
import styled, { css, keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.teal};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 80px 40px;
  }
`;

const Ingress = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-bottom: 80px;
    text-align: left;
    gap: 80px;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    gap: 137px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Item = styled.div<{ $isInView: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${({ $isInView }) =>
    $isInView &&
    css`
      animation: ${fadeIn} 0.5s forwards;
    `}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const TextContainer = styled.div<{ $even?: boolean }>`
  gap: 14px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-left: ${({ $even }) => $even && "40px"};
    margin-right: ${({ $even }) => !$even && "40px"};
    width: calc(100% - 40px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-left: ${({ $even }) => $even && "111px"};
    margin-right: ${({ $even }) => !$even && "111px"};
    width: calc(100% - 157px - 111px);
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  padding: 40px 20px 80px;
  background-color: ${({ theme }) => theme.colors.teal};
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: auto 200px;
    height: 100vh;
    flex-direction: row;
    align-items: center;

    ${TextContainer} {
      margin: auto 200px;
      max-width: 580px;
    }

    img {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export { Wrapper, Ingress, Divider, TextContainer, Grid, Item, BottomSection };
