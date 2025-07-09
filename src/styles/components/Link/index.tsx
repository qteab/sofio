import * as React from "react";
import { DefaultTheme } from "styled-components";
import { Paragraph } from "@/styles/typography";

import S from "./Link.styled";

type Props = {
  label?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  color?: keyof DefaultTheme["colors"];
  fullwidth?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  disabled?: boolean;
  noHover?: boolean;
  style?: React.CSSProperties;
};

const Link: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  label,
  href,
  onClick,
  color,
  fullwidth,
  target,
  disabled,
  noHover,
  style,
}) => {
  return (
    <S.StyledLink
      href={href || ""}
      onClick={(e) => onClick?.(e)}
      $fullwidth={fullwidth}
      $disabled={disabled}
      $noHover={noHover}
      target={target}
      style={style}
      aria-label={label ?? "link"}
    >
      {label && <Paragraph color={color || "white"}>{label}</Paragraph>}
      {children}
    </S.StyledLink>
  );
};

export default Link;
