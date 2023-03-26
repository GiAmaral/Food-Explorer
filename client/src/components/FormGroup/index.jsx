import { FormGroup as StyledFormGroup } from "./styles";

function FormGroup({ children, ...props }) {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
}

export default FormGroup;
