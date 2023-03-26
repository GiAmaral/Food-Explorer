import { Select as StyledSelect, Option as StyledOption } from "./styles";

function Option({ value, children, ...props }) {
  return (
    <StyledOption {...props} value={value}>
      {children}
    </StyledOption>
  );
}

function Select({ value, onChange, children, ...props }) {
  return (
    <StyledSelect {...props} value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  );
}

Select.Option = Option;

export default Select;
