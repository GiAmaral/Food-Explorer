import { forwardRef } from "react";

import { Input as StyledInput } from "./styles";

function Input({ name, ...props }, ref) {
  return <StyledInput id={name} name={name} {...props} ref={ref} />;
}

export default forwardRef(Input);
