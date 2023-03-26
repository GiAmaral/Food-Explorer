import { useLoaderData } from "react-router-dom";
import api from "@services/api";

import Banner from "./components/Banner";
import FoodDishes from "./components/FoodDishes";
import { DishesContainer, NoResultsMessage, SearchTerm } from "./styles";

function Home() {
  const { meals, desserts, drinks } = useLoaderData();

  const searchTerm = new URLSearchParams(window.location.search).get("q") ?? "";

  const numberOfDishes =
    meals.dishes.length + desserts.dishes.length + drinks.dishes.length;

  const renderFoodCategory = (category) => {
    const hasDishes = category.dishes.length > 0;

    if (!hasDishes) {
      return null;
    }

    return (
      <>
        <FoodDishes.Title>{category.title}</FoodDishes.Title>
        <FoodDishes.Items key={`${category.title}-${searchTerm}`}>
          {category.dishes.map((dish) => (
            <FoodDishes.Item
              key={dish.id}
              id={dish.id}
              isFavorite={dish.isFavorite}
              image={{
                fallback: `${api.defaults.baseURL}/files/${dish.image}`,
              }}
              description={dish.description}
              price={dish.price}
              cta="incluir"
            >
              {dish.name}
            </FoodDishes.Item>
          ))}
        </FoodDishes.Items>
      </>
    );
  };

  return (
    <>
      <Banner />

      {numberOfDishes === 0 ? (
        <DishesContainer>
          <NoResultsMessage>
            Nenhum resultado encontrado na busca por{" "}
            <SearchTerm>{searchTerm}</SearchTerm>
          </NoResultsMessage>
        </DishesContainer>
      ) : (
        <DishesContainer>
          <FoodDishes>
            {renderFoodCategory(meals)}
            {renderFoodCategory(desserts)}
            {renderFoodCategory(drinks)}
          </FoodDishes>
        </DishesContainer>
      )}
    </>
  );
}

export default Home;
