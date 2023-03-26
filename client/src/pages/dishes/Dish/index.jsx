import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import CounterDisplay from "@components/CounterDisplay";
import PageBackButton from "@components/PageBackButton";
import Link from "@components/Link";
import { useCart } from "@hooks/cart";
import { useAuth } from "@hooks/auth";
import api from "@services/api";
import { convertCentsToBRL } from "@utils/formatNumber";

import {
  Content,
  DishActionsContainer,
  DishContainer,
  DishCTA,
  DishDescription,
  DishDetails,
  DishImage,
  DishInfoContainer,
  DishIngredient,
  DishIngredients,
  DishTitle,
} from "./styles";

function Dish() {
  const { user } = useAuth();
  const { cart, addToCart } = useCart();
  const { dish } = useLoaderData();

  const [amount, setAmount] = useState(() => {
    const itemInCart = cart.find((item) => item.id === dish.id);

    return itemInCart?.amount || 0;
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
    addToCart(dish, amount);
  };

  return (
    <Content>
      <PageBackButton />

      <DishContainer>
        <DishImage
          src={`${api.defaults.baseURL}/files/${dish.image}`}
          alt={`Foto de um prato servido com ${dish.name}`}
        />

        <DishInfoContainer>
          <DishDetails>
            <DishTitle>{dish.name}</DishTitle>
            <DishDescription>{dish.description}</DishDescription>
            <DishIngredients>
              {dish.ingredients.map((ingredient) => (
                <DishIngredient key={ingredient}>{ingredient}</DishIngredient>
              ))}
            </DishIngredients>
          </DishDetails>

          {user?.isAdmin ? (
            <Link to={`/edit-dish/${dish.id}`}>
              <DishCTA type="button">Editar prato</DishCTA>
            </Link>
          ) : (
            <DishActionsContainer>
              <CounterDisplay
                amount={amount}
                onAdd={handleAddAmount}
                onRemove={handleRemoveAmount}
              />

              <DishCTA type="button" onClick={handleAddToCart}>
                <span>incluir - {convertCentsToBRL(dish.price)}</span>
              </DishCTA>
            </DishActionsContainer>
          )}
        </DishInfoContainer>
      </DishContainer>
    </Content>
  );
}

export default Dish;
