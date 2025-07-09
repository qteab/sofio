import styled from "styled-components";
import { DefaultTheme } from "styled-components";

type Props = {
  $breakpoint?: keyof DefaultTheme["breakpoints"];
};

const Mobile = styled.div<Props>`
  display: none;

  @media screen and (max-width: ${({ theme, $breakpoint }) =>
      theme.breakpoints[$breakpoint ?? "l"]}) {
    display: block;
  }
`;

const S = {
  Mobile,
};

export default S;
