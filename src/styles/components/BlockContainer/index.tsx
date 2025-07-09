import React, { PropsWithChildren } from "react";
import S from "./BlockContainer.styled";

type Props = {
  largeTopMargin?: boolean;
  largeBottomMargin?: boolean;
  narrow?: boolean;
  id?: string;
};

const BlockContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  largeTopMargin,
  largeBottomMargin,
  narrow,
  id,
}) => {
  return (
    <S.BlockContainer
      $largeTop={largeTopMargin}
      $largeBottom={largeBottomMargin}
      $narrow={narrow}
      id={id}
    >
      {children}
    </S.BlockContainer>
  );
};

export default BlockContainer;
