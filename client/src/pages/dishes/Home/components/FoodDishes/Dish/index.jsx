import { useState } from "react";

import { Pencil } from "@components/Icons";
import CounterDisplay from "@components/CounterDisplay";
import Link from "@components/Link";
import { useAuth } from "@hooks/auth";
import { useCart } from "@hooks/cart";
import { convertCentsToBRL } from "@utils/formatNumber";
import { cropString } from "@utils/string";

import FavoriteButton from "./components/FavoriteButton";
import {
  DishActionsContainer,
  DishCTA,
  DishDescription,
  DishImage,
  DishInfoContainer,
  DishItem,
  DishPrice,
  DishTitle,
  EditDishLink,
} from "./styles";

function Dish({ id, image, description, price, isFavorite, cta, children }) {
  const { user } = useAuth();
  const { addToCart, cart } = useCart();

  const [amount, setAmount] = useState(() => {
    const dishInCart = cart.find((item) => item.id === id);

    if (dishInCart) {
      return dishInCart.amount;
    }

    return 0;
  });

  const handleAddAmount = () => {
    setAmount(amount + 1);
  };

  const handleRemoveAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name: children, price }, amount);
  };

  return (
    <DishItem isAdmin={user?.isAdmin}>
      {user?.isAdmin ? (
        <EditDishLink to={`/edit-dish/${id}`}>
          <Pencil />
        </EditDishLink>
      ) : (
        <FavoriteButton dishId={id} liked={isFavorite} />
      )}

      <DishInfoContainer>
        <Link to={`/dish/${id}`}>
          <DishImage
            src={image.fallback}
            alt={`foto de um prate servido de ${children}`}
          />
        </Link>
        <DishTitle>
          {children}&nbsp;{">"}
        </DishTitle>
        <DishDescription>{cropString(description, 60)}</DishDescription>
        <DishPrice>{convertCentsToBRL(price)}</DishPrice>
      </DishInfoContainer>

      {user?.isAdmin ? null : (
        <DishActionsContainer>
          <CounterDisplay
            amount={amount}
            onAdd={handleAddAmount}
            onRemove={handleRemoveAmount}
          />

          <DishCTA onClick={handleAddToCart}>{cta}</DishCTA>
        </DishActionsContainer>
      )}
    </DishItem>
  );
}

export default Dish;
