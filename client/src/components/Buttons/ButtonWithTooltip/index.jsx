import * as RadixTooltip from "@radix-ui/react-tooltip";

import { TooltipContent, TooltipArrow } from "./styles";

function ButtonWithTooltip({ tooltipOpen, side, children }) {
  const [Button, Tooltip] = children;

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={tooltipOpen}>
        <RadixTooltip.Trigger asChild>{Button}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent side={side} sideOffset={5}>
            {Tooltip}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default ButtonWithTooltip;
