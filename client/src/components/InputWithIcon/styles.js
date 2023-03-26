import styled from "styled-components";

import DefaultInput from "../Input";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
`;

export const Input = styled(DefaultInput)`
  width: 100%;
`;
