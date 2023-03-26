import * as Dialog from "@radix-ui/react-dialog";

import Footer from "../../Footer";
import { Close } from "../../Icons";
import SearchBar from "../SearchBar";
import {
  CloseButton,
  Content,
  MenuBody,
  MenuHeader,
  MenuLink,
  MenuList,
  MenuTitle,
} from "./styles";

function FloatingMenu({ closeFloatingMenu }) {
  return (
    <Dialog.Portal>
      <Content>
        <MenuHeader>
          <Dialog.Close asChild>
            <CloseButton aria-label="fechar" onClick={closeFloatingMenu}>
              <Close />
            </CloseButton>
          </Dialog.Close>
          <MenuTitle>Menu</MenuTitle>
        </MenuHeader>

        <MenuBody>
          <SearchBar closeFloatingMenu={closeFloatingMenu} />

          <nav>
            <MenuList>
              <li>
                <Dialog.Close asChild>
                  <MenuLink to="/add-dish" onClick={closeFloatingMenu}>
                    Novo prato
                  </MenuLink>
                </Dialog.Close>
              </li>
              <li>
                <Dialog.Close asChild>
                  <MenuLink to="/sign-out" onClick={closeFloatingMenu}>
                    Sair
                  </MenuLink>
                </Dialog.Close>
              </li>
            </MenuList>
          </nav>
        </MenuBody>

        <Footer />
      </Content>
    </Dialog.Portal>
  );
}

export default FloatingMenu;
