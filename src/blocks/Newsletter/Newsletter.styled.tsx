"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.oceanBlue};
  border-radius: 10px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 20px;
  margin-top: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 40px;
    margin-top: 160px;
    height: 150px;
    padding: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export { Wrapper };
