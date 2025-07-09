import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px 40px;
  }
`;

export { Wrapper };
