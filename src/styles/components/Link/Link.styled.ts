import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)<{
  $fullwidth?: boolean;
  $disabled?: boolean;
  $noHover?: boolean;
}>`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "auto")};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    &:hover,
    &:focus {
      p,
      h3 {
        color: ${({ theme, $noHover }) =>
          $noHover ? "auto" : theme.colors.oceanBlue};
      }
    }
  }
`;

const S = {
  StyledLink,
};

export default S;
