import styled from "styled-components";
import RedButton from "@components/Buttons/RedButton";
import Link from "@components/Link";

export const DishItem = styled.li`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 2rem;
  min-width: 21rem;
  width: 21rem;

  padding: ${({ isAdmin }) => (isAdmin ? "6.4rem 2.4rem" : "2.4rem")};

  position: relative;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    min-width: 30.4rem;
    width: 30.4rem;
  }
`;

export const EditDishLink = styled(Link)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  padding: 0;
`;

export const DishInfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    grid-template-rows: auto 1fr 1fr auto;
  }
`;

export const DishImage = styled.img`
  width: 8.8rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    width: 17.6rem;
  }
`;

export const DishTitle = styled.h4`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
  }
`;

export const DishDescription = styled.p`
  display: none;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
  }
`;

export const DishPrice = styled.p`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  font-size: 1.6rem;
  line-height: 100%;
  text-align: center;

  font-family: "Roboto", sans-serif;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 3.2rem;
    line-height: 5.1rem;
  }
`;

export const DishActionsContainer = styled.div`
  display: grid;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const DishCTA = styled(RedButton)`
  padding: 0.4rem 1.6rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    padding: 1.2rem 2.4rem;
    width: 100%;
    align-items: center;
  }
`;
