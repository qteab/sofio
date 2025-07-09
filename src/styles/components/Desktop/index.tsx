import * as React from "react";
import { DefaultTheme } from "styled-components";

import S from "./Desktop.styled";

type Props = {
  breakpoint?: keyof DefaultTheme["breakpoints"];
};

const Desktop: React.FC<React.PropsWithChildren<Props>> = ({
  breakpoint,
  children,
}) => {
  return <S.Desktop $breakpoint={breakpoint}>{children}</S.Desktop>;
};

export default Desktop;
