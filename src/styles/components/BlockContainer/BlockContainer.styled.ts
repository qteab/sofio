import styled from "styled-components";

type Props = {
  $largeTop?: boolean;
  $largeBottom?: boolean;
  $narrow?: boolean;
};

export const BlockContainer = styled.div<Props>`
  margin: 20px;
  margin-top: ${({ $largeTop }) => $largeTop && "80px"};
  margin-bottom: ${({ $largeBottom }) => $largeBottom && "80px"};
  max-width: ${({ $narrow }) => ($narrow ? "1200px" : "1840px")};
  width: calc(100% - 40px);
  justify-self: center;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin: 40px;
    width: calc(100% - 80px);
    margin-top: ${({ $largeTop }) => $largeTop && "160px"};
    margin-bottom: ${({ $largeBottom }) => $largeBottom && "160px"};
  }
`;

const S = {
  BlockContainer,
};

export default S;
