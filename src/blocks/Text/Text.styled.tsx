"use client";
import styled, { css } from "styled-components";

const Wrapper = styled.div<{ $layout?: "default" | "centered" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $layout }) => $layout === "centered" && "center"};
  margin: 80px 20px;
  position: relative;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ $layout }) =>
      $layout !== "centered"
        ? css`
            display: grid;
            grid-template-columns: 1fr 1fr;
          `
        : css`
            h2 {
              max-width: 1500px;
            }

            p {
              max-width: 585px;
            }
          `};

    margin: 160px;
    gap: 40px;
  }
`;

export { Wrapper };
