import styled from "styled-components";

import InputWithIcon from "../../InputWithIcon";

export const Search = styled(InputWithIcon)`
  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
    display: flex;
    padding: 0 10rem;
  }
`;
