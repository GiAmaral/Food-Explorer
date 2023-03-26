import { useEffect, useRef, useState } from "react";

import {
  LeftArrow as LeftArrowIcon,
  RightArrow as RightArrowIcon,
} from "@components/Icons";

import Dish from "./Dish";
import {
  Container,
  DishesList,
  DishesListContainer,
  LeftArrow,
  Overlay,
  RightArrow,
  Title as StyledTitle,
} from "./styles";

// This is the width of each dish item + the gap between them
const CONTAINER_WIDTH = 304 + 24;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function Items({ children }) {
  const [isListScrollable, setIsListScrollable] = useState(false);
  const listRef = useRef(null);
  const scrollRef = useRef(0);

  const scrollTo = (position) => {
    listRef.current.scrollTo({
      left: position,
      behavior: "smooth",
    });
  };

  const handleLeftHandlerClick = () => {
    const allTheWayLeft = listRef.current.scrollLeft === 0;

    if (allTheWayLeft) {
      return scrollTo(0);
    }

    scrollRef.current -= CONTAINER_WIDTH;
    scrollTo(scrollRef.current);
  };

  const handleRightHandlerClick = () => {
    const allTheWayRight = listRef.current.scrollLeft < scrollRef.current;

    if (allTheWayRight) {
      return;
    }

    scrollRef.current += CONTAINER_WIDTH;
    scrollTo(scrollRef.current);
  };

  useEffect(() => {
    const list = listRef.current;
    setIsListScrollable(list.scrollWidth > list.clientWidth);
  }, [listRef.current]);

  return (
    <DishesListContainer>
      <Overlay />

      {isListScrollable ? (
        <LeftArrow onClick={handleLeftHandlerClick}>
          <LeftArrowIcon />
        </LeftArrow>
      ) : null}

      <DishesList ref={listRef}>{children}</DishesList>

      {isListScrollable ? (
        <RightArrow onClick={handleRightHandlerClick}>
          <RightArrowIcon />
        </RightArrow>
      ) : null}
    </DishesListContainer>
  );
}

function FoodDishes({ children }) {
  return <Container>{children}</Container>;
}

FoodDishes.Title = Title;
FoodDishes.Items = Items;
FoodDishes.Item = Dish;

export default FoodDishes;
