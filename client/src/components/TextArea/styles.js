import styled from "styled-components";

export const TextArea = styled.textarea`
  all: unset;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.8rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;
