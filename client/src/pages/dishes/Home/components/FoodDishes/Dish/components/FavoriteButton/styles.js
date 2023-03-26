import styled, { css } from "styled-components";
import IconButton from "@components/Buttons/IconButton";

export const FavButton = styled(IconButton)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  padding: 0;

  ${({ isLiked }) =>
    isLiked &&
    css`
      svg > path {
        fill: ${({ theme }) => theme.COLORS.TOMATO_100};
        stroke: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    `}
`;
