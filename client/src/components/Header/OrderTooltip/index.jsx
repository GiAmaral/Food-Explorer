import { useCart } from "../../../hooks/cart";
import { convertCentsToBRL } from "@utils/formatNumber";
import { OrderPrice, OrderTooltipItem, OrderTooltipList } from "./styles";

function OrderTooltip() {
  const { cart } = useCart();

  return (
    <OrderTooltipList>
      {cart.map((item) => (
        <OrderTooltipItem key={item.id}>
          <span>{item.amount}</span>
          <span>{item.name}</span>
          <OrderPrice>{convertCentsToBRL(item.price * item.amount)}</OrderPrice>
        </OrderTooltipItem>
      ))}
      <OrderTooltipItem>
        <span></span>
        <span>Total</span>
        <OrderPrice>
          {convertCentsToBRL(
            cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
          )}
        </OrderPrice>
      </OrderTooltipItem>
    </OrderTooltipList>
  );
}

export default OrderTooltip;
