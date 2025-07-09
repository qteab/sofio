import styled from "styled-components";
import { addPxSuffix } from "@/helpers";

type Props = {
  flex?: number;
  flexShrink?: number;
  flexGrow?: number;
  height?: string | number;
  width?: string | number;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: number;
  transform?: string;
};

const Absolute = styled.div<Props>`
  position: absolute;
  height: ${({ height }) => addPxSuffix(height || "auto")};
  width: ${({ width }) => addPxSuffix(width || "auto")};
  top: ${({ top }) => addPxSuffix(top || "auto")};
  bottom: ${({ bottom }) => addPxSuffix(bottom || "auto")};
  left: ${({ left }) => addPxSuffix(left || "auto")};
  right: ${({ right }) => addPxSuffix(right || "auto")};
  z-index: ${({ zIndex }) => zIndex || "0"};
  transform: ${({ transform }) => transform || "none"};
`;

export default Absolute;
