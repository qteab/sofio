"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 92vh;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    justify-content: center;
    padding: 60px 40px;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000033;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    h1 {
      max-width: 65%;
    }

    p {
      max-width: 33%;
    }
  }
`;

export { Wrapper, Overlay, TextContainer, BackgroundVideo };
