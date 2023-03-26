import RedButton from "../RedButton";
import { TooltipList } from "./styles";

function FormSubmitButton({ children, errors, ...props }) {
  const Tooltip = errors ? (
    <TooltipList key="tooltip">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </TooltipList>
  ) : null;

  return (
    <RedButton
      {...props}
      type="submit"
      disabled={errors}
      tooltipConfig={{
        Component: Tooltip,
      }}
    >
      {children}
    </RedButton>
  );
}

export default FormSubmitButton;
