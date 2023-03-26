import styled from "styled-components";

import downArrow from "../../assets/icons/down-arrow.svg";

export const Select = styled.select`
  all: unset;
  padding: 1.6rem;
  border-radius: 0.8rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 100%;
  font-weight: 400;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  background-image: url(${downArrow});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 1.6rem);
  background-position-y: 2rem;
`;

export const Option = styled.option``;
