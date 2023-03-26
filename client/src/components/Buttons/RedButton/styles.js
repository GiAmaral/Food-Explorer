import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-family: Poppins, sans-serif;
  font-weight: 500;

  padding: 1.2rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
`;

export const TooltipContent = styled(Tooltip.Content)`
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.DARK_100};
  padding: 8px 16px;
  border-radius: 4px;

  opacity: 1;
  &[data-state="closed"] {
    opacity: 0;
  }

  transition: opacity 250ms ease-in-out;
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
