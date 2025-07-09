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

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-top: 40px;
  }
`;

const Entry = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  padding: 20px 0 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 40px 0 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Date = styled.p`
  font-weight: 400;
  font-size: 64px;
  letter-spacing: -2%;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 128px;
    margin-left: auto;
    margin-right: 200px;
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 430px;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 400 / 202;
  margin-bottom: 20px;
`;

export { Wrapper, Timeline, Entry, Date, TextContainer, Image };
