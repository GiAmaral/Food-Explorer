import { createContext, useContext, useState } from "react";

import { useNotification } from "./notification";

export const CartContext = createContext([]);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return context;
};

export function CartProvider({ children }) {
  const { notify } = useNotification();

  const [cart, setCart] = useState([]);

  const itemsInCart = cart.reduce((acc, item) => acc + item.amount, 0);

  const addToCart = (dish, amount) => {
    const { id, name, price } = dish;

    if (amount === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      notify("success", "Prato removido do carrinho", { autoClose: 2000 });
      return;
    }

    const dishAlreadyInCart = cart.find((item) => item.id === id);

    if (dishAlreadyInCart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount,
          };
        }

        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, { id, name, price, amount }]);
    }

    notify("success", "Prato adicionado ao carrinho", { autoClose: 2000 });
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, itemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}
