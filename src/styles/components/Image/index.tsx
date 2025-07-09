import * as React from "react";

import S from "./Image.styled";

type Props = {
  src: string;
  height?: string | number;
  width?: string | number;
  aspectRatio?: string;
};

const Image: React.FC<Props> = ({ src, height, width, aspectRatio }) => {
  return (
    <S.Image
      src={src}
      width={width}
      height={height}
      $aspectRatio={aspectRatio}
    />
  );
};

export default Image;
