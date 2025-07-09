import styled from "styled-components";

const Image = styled.img<{
  width?: string | number;
  height?: string | number;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

const S = {
  Image,
};

export default S;
