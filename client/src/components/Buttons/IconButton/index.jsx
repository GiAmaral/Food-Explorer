import { forwardRef } from "react";

import ButtonWithTooltip from "../ButtonWithTooltip";
import { Button } from "./styles";

function IconButton({ children, tooltipConfig = {}, ...props }, ref) {
  const { isOpen, side = "top", Component: Tooltip } = tooltipConfig;

  if (!Tooltip) {
    return (
      <Button {...props} ref={ref}>
        {children}
      </Button>
    );
  }

  return (
    <ButtonWithTooltip tooltipOpen={isOpen} side={side}>
      {[
        <Button {...props} key="button" ref={ref}>
          {children}
        </Button>,
        Tooltip,
      ]}
    </ButtonWithTooltip>
  );
}

export default forwardRef(IconButton);
