"use client";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    aspect-ratio: 1840 / 700;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1220px;
    margin: auto;
    margin-bottom: 80px;
  }
`;

export { ImageContainer, TextContainer };
