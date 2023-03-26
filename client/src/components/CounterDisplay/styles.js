import styled from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.6rem;
  line-height: 100%;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;
