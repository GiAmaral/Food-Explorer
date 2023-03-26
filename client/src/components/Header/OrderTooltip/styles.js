import styled from "styled-components";

export const OrderTooltipList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const OrderTooltipItem = styled.li`
  display: grid;
  grid-template-columns: 1.6rem 1fr 6.4rem;
  gap: 1.2rem;
  align-items: center;
`;

export const OrderPrice = styled.span`
  font-weight: 500;
  text-align: right;
`;
