import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  display: block;
  padding: 1.6rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  line-height: 100%;
`;
