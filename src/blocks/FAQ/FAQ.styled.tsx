"use client";
import styled from "styled-components";

const Entry = styled.div<{ $borderBottom?: boolean; $active?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: ${({ $borderBottom, theme }) =>
    $borderBottom ? `1px solid ${theme.colors.black}` : "none"};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`;

const EntryHeader = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-align: left;
  border: none;
  cursor: pointer;
  background: none;

  h3 {
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    h3 {
      color: ${({ theme }) => theme.colors.skyBlue};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`;

export { Entry, EntryHeader };
