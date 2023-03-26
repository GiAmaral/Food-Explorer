import styled from "styled-components";

export const Label = styled.label`
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;
