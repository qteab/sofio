import styled, { css } from "styled-components";

const inputCss = css`
  padding: 10px 35px;
  height: 45px;
  border-radius: 45px;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 156%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.midnight};
  }

  &:-webkit-autofill {
    animation-name: autofillStart;
    animation-duration: 0.01s;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 10px 40px;
  }
`;

const Input = styled.input<{ $error?: boolean; $secondary?: boolean }>`
  ${inputCss}

  ${({ $secondary, theme }) =>
    $secondary &&
    css`
      border-color: ${theme.colors.black};
      border-radius: 0;
      padding: 10px !important;
    `}

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.tangerine};
    `}
`;

const TextArea = styled.textarea<{ $error?: boolean; $secondary?: boolean }>`
  ${inputCss}
  resize: vertical;
  min-height: 220px;

  ${({ $secondary, theme }) =>
    $secondary &&
    css`
      border-color: ${theme.colors.black};
      border-radius: 0;
      padding: 10px !important;
    `}

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.tangerine};
    `}
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: 2px;
  width: 80px;
  z-index: 10;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 45px 45px 0;
  background-color: ${({ theme }) => theme.colors.white};

  svg {
    width: 22px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      opacity: 0.7;
    }
  }
`;

const S = {
  Input,
  TextArea,
  ArrowButton,
};

export default S;
