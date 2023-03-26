import ButtonWithTooltip from "../ButtonWithTooltip";
import { Button } from "./styles";

function RedButton({ children, tooltipConfig = {}, ...props }) {
  const { isOpen, side = "top", Component: Tooltip } = tooltipConfig;

  if (!Tooltip) {
    return <Button {...props}>{children}</Button>;
  }

  return (
    <ButtonWithTooltip tooltipOpen={isOpen} side={side}>
      {[
        <Button key="button" {...props}>
          {children}
        </Button>,
        Tooltip,
      ]}
    </ButtonWithTooltip>
  );
}

export default RedButton;
