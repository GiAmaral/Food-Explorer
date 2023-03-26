import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  margin: 4.4rem 1.6rem 6.4rem 3.6rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    margin: 16.4rem auto 6.4rem;
    max-width: 112rem;
    gap: 2rem;
  }
`;

export const Picture = styled.picture`
  margin: -3rem -0.8rem 0 -3rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    margin: -13.2rem -0.8rem 0 -5.4rem;
  }
`;

export const BannerContent = styled.div`
  margin: 2.4rem 0.8rem 2.4rem 0;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    gap: 0.8rem;
    margin: 9.2rem 10.4rem 9.2rem 0;
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-size: 4rem;
    line-height: 5.6rem;
    font-weight: 500;
  }
`;

export const BannerSubtitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;
