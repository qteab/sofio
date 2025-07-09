import * as React from "react";
import { DefaultTheme } from "styled-components";

import S from "./Mobile.styled";

type Props = {
  breakpoint?: keyof DefaultTheme["breakpoints"];
};

const Mobile: React.FC<React.PropsWithChildren<Props>> = ({
  breakpoint,
  children,
}) => {
  return <S.Mobile $breakpoint={breakpoint}>{children}</S.Mobile>;
};

export default Mobile;
