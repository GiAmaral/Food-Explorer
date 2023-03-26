import styled from "styled-components";

import { Logo } from "../Icons";

export const Footer = styled.footer`
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 1120px;

  margin: 0 auto;
`;

export const FooterLogo = styled(Logo)`
  height: 2.2rem;
  width: auto;

  path {
    fill: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    height: 3rem;
  }
`;

export const Copyright = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;
