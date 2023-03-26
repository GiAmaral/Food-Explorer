import styled from "styled-components";

import RedButton from "@components/Buttons/RedButton";

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 5.6rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.4rem 0 4.8rem;
  }
`;

export const DishImage = styled.img`
  width: 26.4rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    width: 39rem;
  }
`;

export const DishContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    gap: 4.8rem;
  }
`;

export const DishInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const DishTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.7rem;
  line-height: 3.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 4rem;
    line-height: 5.6rem;
    text-align: left;
  }
`;

export const DishDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    text-align: left;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const DishIngredients = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    justify-content: flex-start;
  }
`;

export const DishIngredient = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
`;

export const DishActionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
    gap: 4.8rem;
  }
`;

export const DishCTA = styled(RedButton)`
  gap: 0.8rem;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    padding: 1.2rem 2.4rem;
  }
`;
