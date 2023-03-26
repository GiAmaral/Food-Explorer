import styled, { css } from "styled-components";
import IconButton from "@components/Buttons/IconButton";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Title = styled.h3`
  margin: 0 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 3.2rem;
    line-height: 140%;
    margin: 0;
  }
`;

export const DishesListContainer = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 10;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 1) 0%,
      rgba(0, 10, 15, 0) 25%,
      rgba(0, 10, 15, 0) 75%,
      rgba(0, 10, 15, 1) 100%
    );
  }
`;

const handlersBase = css`
  display: none;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    all: unset;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    height: 50%;
    width: 3%;
    top: 25%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftArrow = styled.button`
  ${handlersBase}

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    left: 0;
  }
`;

export const RightArrow = styled(IconButton)`
  ${handlersBase}

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    right: 0;
  }
`;

export const DishesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.6rem;
  padding: 0 2.4rem;
  overflow-x: auto;
  max-width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    padding: 0;
  }
`;
