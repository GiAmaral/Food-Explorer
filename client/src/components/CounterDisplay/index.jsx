import { Minus, Plus } from "@components/Icons";
import IconButton from "@components/Buttons/IconButton";

import { Counter, CountContainer } from "./styles";

function CounterDisplay({ amount, onAdd, onRemove }) {
  return (
    <CountContainer>
      <IconButton onClick={onRemove}>
        <Minus />
      </IconButton>
      <Counter>{String(amount).padStart(2, "0")}</Counter>
      <IconButton onClick={onAdd}>
        <Plus />
      </IconButton>
    </CountContainer>
  );
}

export default CounterDisplay;
