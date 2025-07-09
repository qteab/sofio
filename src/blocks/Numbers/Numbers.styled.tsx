import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1220px;
    margin: auto;
  }
`;

const NumbersContainer = styled.div<{ $isInView: boolean }>`
  margin-top: 40px;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  transition: all 0.6s ease-in-out;
  opacity: ${({ $isInView }) => ($isInView ? 1 : 0)};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-top: ${({ $isInView }) => ($isInView ? "40px" : "80px")};
    padding-top: 46px;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 40px;
  }
`;

export { TextContainer, NumbersContainer };
