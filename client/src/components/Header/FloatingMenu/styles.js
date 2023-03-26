import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import IconButton from "../../Buttons/IconButton";
import Link from "../../Link";

const slideIn = keyframes`
0% {
    left: -100vw;
}
100% {
    left: 0;
}
`;

const slideOut = keyframes`
0% {
    left: 0;
}
100% {
    left: -100vw;
}
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: grid;
  grid-template-rows: auto 1fr auto;

  &[data-state="open"] {
    animation: ${slideIn} 250ms cubic-bezier(0.56, -0.01, 0.4, 1);
  }

  &[data-state="closed"] {
    animation: ${slideOut} 250ms cubic-bezier(0.56, -0.01, 0.4, 1);
  }
`;

export const MenuHeader = styled.header`
  min-height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  padding: 3.2rem 2.4rem;
  gap: 1.6rem;

  align-items: flex-end;
`;

export const CloseButton = styled(IconButton)`
  padding: 0;
`;

export const MenuTitle = styled(Dialog.Title)`
  font-family: Roboto, sans-serif;
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 400;
`;

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  padding: 3.2rem 2.4rem;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuLink = styled(Link)`
  display: flex;
  padding: 2rem;

  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  line-height: 3.3rem;
  font-weight: 300;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;
