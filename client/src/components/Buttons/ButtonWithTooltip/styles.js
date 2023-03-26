import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

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
