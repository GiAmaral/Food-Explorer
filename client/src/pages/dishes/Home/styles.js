import styled from "styled-components";

export const DishesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    gap: 4.8rem;
    max-width: 112rem;
    margin: 0 auto;
    margin-bottom: 4.8rem;
  }
`;

export const NoResultsMessage = styled.p`
  font-size: 2.4rem;
  font-size: clamp(2.4rem, 1.3599999999999999rem + 3.25vw, 5rem);
  font-weight: 500;
  padding: 2.4rem;
`;

export const SearchTerm = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 2.4rem;
  font-size: clamp(2.4rem, 1.8rem + 3.25vw, 5rem);
`;
