import styled from "styled-components";

import Link from "@components/Link";

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: 2.4rem;
  line-height: 3.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  svg {
    height: 22px;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    font-weight: 700;
  }
`;
