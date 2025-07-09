import * as React from "react";
import S from "./BackgroundImage.styled";

type Props = {
  src: string;
};

const BackgroundImage: React.FC<Props> = ({ src }) => {
  return <S.Image src={src} />;
};

export default BackgroundImage;
