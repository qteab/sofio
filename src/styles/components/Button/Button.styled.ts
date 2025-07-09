import styled from "styled-components";

type Props = {
  $disabled?: boolean;
  $secondary?: boolean;
  $noBorder?: boolean;
  $loading?: boolean;
  $fullwidth?: boolean;
  $mobileFullwidth?: boolean;
  $margin?: string;
};

export const Button = styled.a<Props>`
  background-color: ${({ theme, $secondary }) =>
    theme.colors[$secondary ? "black" : "white"]};
  border: 1px solid
    ${({ theme, $noBorder, $secondary }) =>
      theme.colors[$noBorder ? ($secondary ? "black" : "white") : "black"]};
  padding: 8px 24px;
  width: ${({ $fullwidth, $mobileFullwidth }) =>
    $mobileFullwidth ? "100%" : $fullwidth ? "100%" : "max-content"};
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  margin: ${({ $margin }) => ($margin ? $margin : 0)};
  position: relative;
  transition: all 0.2s ease-in-out;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.7)};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ $fullwidth, $mobileFullwidth }) =>
      $fullwidth ? "100%" : $mobileFullwidth ? "max-content" : "max-content"};
  }
`;

const S = {
  Button,
};

export default S;
