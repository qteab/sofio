"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 80px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    gap: 18px;
  }
`;

export { Wrapper, Form };
