import { forwardRef } from "react";
import { Link as StyledLink } from "./styles";

function Link({ children, ...props }, ref) {
  return (
    <StyledLink {...props} ref={ref}>
      {children}
    </StyledLink>
  );
}

export default forwardRef(Link);
