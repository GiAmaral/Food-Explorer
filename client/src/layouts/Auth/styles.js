import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.2rem;

  padding: 4.8rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    max-width: 110rem;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
