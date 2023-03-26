import styled, { css } from "styled-components";

import IconButton from "../Buttons/IconButton";
import RedButton from "../Buttons/RedButton";
import SearchBar from "./SearchBar";
import Link from "../Link";

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3.2rem 2.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    height: auto;
    padding: 1.6rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "menu logo cart";
  align-items: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    max-width: 112rem;
    margin: 0 auto;
    grid-template-areas: "logo search cart logout";
    grid-template-columns: auto 1fr auto auto;
    gap: 3.2rem;
  }
`;

export const MenuButton = styled(IconButton)`
  grid-area: menu;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: none;
  }
`;

export const CartButton = styled(IconButton)`
  grid-area: cart;
  padding: 0;
  position: relative;

  &::after {
    content: attr(data-cart-items-counter);
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  ${({ isAdmin }) =>
    isAdmin &&
    css`
      display: none;
    `}

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: none;
  }
`;

export const Search = styled(SearchBar)`
  display: none;
  grid-area: search;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
  }
`;

export const NewDishButton = styled(RedButton)`
  display: none;
  grid-area: cart;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem 4.8rem;
  }
`;

export const RedCartButton = styled(RedButton)`
  display: none;
  grid-area: cart;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem 4.8rem;
  }
`;

export const LogoutButton = styled(Link)`
  display: none;
  grid-area: logout;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
