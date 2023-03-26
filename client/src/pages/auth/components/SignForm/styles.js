import styled from "styled-components";
import { Form as RouterForm } from "react-router-dom";

export const Form = styled(RouterForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    max-width: 46.7rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 16px;
  }
`;

export const FormTitle = styled.h1`
  display: none;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: block;
    font-family: Poppins, sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }
`;
