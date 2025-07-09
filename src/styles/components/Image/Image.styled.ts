import styled from "styled-components";
import { addPxSuffix } from "@/helpers";

const Image = styled.img<{
  width?: string | number;
  height?: string | number;
  $aspectRatio?: string;
}>`
  width: ${({ width }) => addPxSuffix(width || "100%")};
  height: ${({ height }) => addPxSuffix(height || "100%")};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  object-fit: cover;
  object-position: center;
`;

const S = {
  Image,
};

export default S;
