import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  all: unset;
  cursor: pointer;

  font-family: Poppins, sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  text-align: center;
`;
