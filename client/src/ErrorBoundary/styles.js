import styled from "styled-components";

import Link from "@components/Link";

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  height: 100vh;
  max-width: 112rem;
  margin: 0 auto;
  padding: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    gap: 4.8rem;
  }
`;

export const ErrorBoundaryTitle = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  text-align: center;
`;

export const ErrorBoundaryActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    gap: 4.8rem;
  }
`;

export const ErrorBoundaryLink = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  font-weight: 500;
  padding: 1.6rem 2.4rem;
  border-radius: 0.8rem;
`;
