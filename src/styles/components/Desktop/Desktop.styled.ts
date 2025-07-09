import styled from "styled-components";
import { DefaultTheme } from "styled-components";

type Props = {
  $breakpoint?: keyof DefaultTheme["breakpoints"];
};

const Desktop = styled.div<Props>`
  display: block;

  @media screen and (max-width: ${({ theme, $breakpoint }) =>
      theme.breakpoints[$breakpoint ?? "l"]}) {
    display: none;
  }
`;

const S = {
  Desktop,
};

export default S;
