import { Label as StyledLabel } from "./styles";

function Label({ children, ...props }) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;
