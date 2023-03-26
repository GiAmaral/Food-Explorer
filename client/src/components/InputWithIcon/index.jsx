import { useRef } from "react";

import { Container, Input } from "./styles";

function InputWithIcon({ Icon, className, ...props }) {
  const inputRef = useRef(null);

  const giveInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Container className={className} onClick={giveInputFocus}>
      <Icon />

      <Input {...props} ref={inputRef} />
    </Container>
  );
}

export default InputWithIcon;
