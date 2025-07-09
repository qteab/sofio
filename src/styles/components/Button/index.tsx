import React, { PropsWithChildren } from "react";

import S from "./Button.styled";
import { Paragraph } from "@/styles/typography";

type Props = {
  label?: string;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onFocus?: () => void;
  target?: string;
  type?: React.HTMLInputTypeAttribute;
  margin?: string;
  fullwidth?: boolean;
  mobileFullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  secondary?: boolean;
  noBorder?: boolean;
};

const Button: React.FC<Props> = ({
  label,
  url,
  onClick,
  onFocus,
  target,
  margin,
  fullwidth,
  mobileFullwidth,
  disabled,
  loading,
  success,
  secondary,
  noBorder,
}) => {
  return (
    <S.Button
      href={url}
      onClick={(e) => (disabled ? undefined : onClick?.(e))}
      onFocus={onFocus}
      $margin={margin}
      $disabled={disabled}
      $secondary={secondary}
      target={target}
      $loading={loading || success}
      $noBorder={noBorder}
      $fullwidth={fullwidth}
      $mobileFullwidth={mobileFullwidth}
      aria-label={label ?? "button"}
    >
      <Paragraph color={secondary ? "white" : "black"}>{label}</Paragraph>
    </S.Button>
  );
};

export default Button;
