import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Logout, MenuHamburguer, Receipt } from "@components/Icons";
import Link from "@components/Link";
import Logo from "@components/Logo";
import { useAuth } from "@hooks/auth";
import { useCart } from "@hooks/cart";
import {
  Container,
  Content,
  MenuButton,
  CartButton,
  Search,
  RedCartButton,
  LogoutButton,
  NewDishButton,
} from "./styles";
import FloatingMenu from "./FloatingMenu";
import OrderTooltip from "./OrderTooltip";

function Header() {
  const { user } = useAuth();
  const { itemsInCart } = useCart();

  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const openFloatingMenu = () => {
    setIsFloatingMenuOpen(true);
  };

  const closeFloatingMenu = () => {
    setIsFloatingMenuOpen(false);
  };

  const toggleMobileTooltip = () => {
    setShowMobileTooltip((prevState) => !prevState);
  };

  const toggleTooltip = () => {
    setShowTooltip((prevState) => !prevState);
  };

  return (
    <Dialog.Root open={isFloatingMenuOpen}>
      <Container>
        <Content>
          <Dialog.Trigger asChild>
            <MenuButton onClick={openFloatingMenu}>
              <MenuHamburguer />
            </MenuButton>
          </Dialog.Trigger>

          <FloatingMenu closeFloatingMenu={closeFloatingMenu} />

          <Logo />

          <Search />

          <CartButton
            data-cart-items-counter={itemsInCart}
            isAdmin={user?.isAdmin}
            tooltipConfig={{
              isOpen: showMobileTooltip,
              Component: <OrderTooltip key="mobileOrderTooltip" />,
              side: "bottom",
            }}
            onClick={toggleMobileTooltip}
          >
            <Receipt />
          </CartButton>

          {user?.isAdmin ? (
            <Link to="/add-dish">
              <NewDishButton type="button">Novo Prato</NewDishButton>
            </Link>
          ) : (
            <RedCartButton
              tooltipConfig={{
                isOpen: showTooltip,
                Component: <OrderTooltip key="orderTooltip" />,
                side: "bottom",
              }}
              onClick={toggleTooltip}
            >
              <Receipt />
              <span>Pedidos ({itemsInCart})</span>
            </RedCartButton>
          )}

          <LogoutButton to="/sign-out">
            <Logout />
          </LogoutButton>
        </Content>
      </Container>
    </Dialog.Root>
  );
}

export default Header;
