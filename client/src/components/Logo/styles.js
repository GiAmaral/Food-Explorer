import styled from "styled-components";
import Link from "../Link";
import { LogoPolygon } from "../Icons";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  position: relative;
`;

export const Polygon = styled(LogoPolygon)`
  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    width: 3rem;
  }
`;

export const LogoName = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.1rem;
  line-height: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`;

export const AdminTag = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    position: absolute;
    inset: auto 0 -1.4rem auto;
  }
`;
