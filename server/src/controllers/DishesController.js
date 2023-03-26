const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");
const { validate } = require("./validations/dishes");

class DishesController {
  async index(req, res) {
    const { id: userId } = req.user;
    const { q } = req.query;

    if (!q) {
      const [allDishes, userFavoriteDishes] = await Promise.all([
        knex
          .from("dishes")
          .select("id", "name", "category", "price", "description", "image"),

        knex
          .from("users_favorite_dishes")
          .where({ user_id: userId })
          .select("dish_id"),
      ]);

      const allDishesWithFavorite = allDishes.map((dish) => {
        const dishIsFavorite = userFavoriteDishes.find(
          (favoriteDish) => favoriteDish.dish_id === dish.id
        );

        return {
          ...dish,
          isFavorite: !!dishIsFavorite,
        };
      });

      return res.json(allDishesWithFavorite);
    }

    const [dishesFromQuery, ingredientsFromQuery, userFavoriteDishes] =
      await Promise.all([
        knex.from("dishes").whereLike("name", `%${q}%`),

        knex.from("ingredients").whereLike("name", `%${q}%`),

        knex
          .from("users_favorite_dishes")
          .where({ user_id: userId })
          .select("dish_id"),
      ]);

    const dishesWithIngredients = await knex
      .from("dishes_ingredients")
      .whereIn(
        "ingredient_id",
        ingredientsFromQuery.map((ingredient) => ingredient.id)
      )
      .join("dishes", "dishes.id", "dishes_ingredients.dish_id")
      .select(
        "dishes.id",
        "dishes.name",
        "dishes.category",
        "dishes.price",
        "dishes.description",
        "dishes.image"
      );

    const allDishesFromQuery = [
      ...dishesFromQuery,
      ...dishesWithIngredients,
    ].reduce((acc, dish) => {
      const dishExists = acc.find((accDish) => accDish.id === dish.id);

      if (!dishExists) {
        acc.push({
          ...dish,
          isFavorite: !!userFavoriteDishes.find(
            (favoriteDish) => favoriteDish.dish_id === dish.id
          ),
        });
      }

      return acc;
    }, []);

    return res.json(allDishesFromQuery);
  }

  async show(req, res) {
    const { id } = req.params;

    const dish = await knex.from("dishes").where({ id }).first();

    if (!dish) {
      return res.status(404).json({ message: "Prato não encontrado" });
    }

    const dishWithIngredients = await knex
      .from("dishes_ingredients")
      .where({ dish_id: dish.id })
      .join("ingredients", "ingredients.id", "dishes_ingredients.ingredient_id")
      .select("ingredients.name");

    return res.json({
      ...dish,
      ingredients: dishWithIngredients.map((ingredient) => ingredient.name),
    });
  }

  async create(req, res) {
    const {
      body: { name, category, ingredients, price, description },
      file: { filename },
    } = req;

    const priceInCents = Number(price.replace(/\D/g, ""));
    const ingredientsArray = ingredients.toLowerCase().split(",");

    try {
      await validate({
        image: filename,
        name,
        category,
        ingredients: ingredientsArray,
        price: priceInCents,
        description,
      });
    } catch {
      throw new AppError(
        "Não foi possível criar um prato com esses dados",
        400
      );
    }

    const diskStorage = new DiskStorage();

    const storedFilename = await diskStorage.saveFile(filename);

    const insertedDish = await knex("dishes").insert(
      {
        name,
        category,
        price: priceInCents,
        description,
        image: storedFilename,
      },
      "id"
    );

    ingredientsArray.forEach(async (ingredient) => {
      const storedIngredient = await knex("ingredients")
        .where({ name: ingredient })
        .first();

      let ingredientId = storedIngredient?.id;

      if (!ingredientId) {
        const insertedIngredient = await knex("ingredients").insert(
          { name: ingredient },
          "id"
        );

        ingredientId = insertedIngredient[0].id;
      }

      await knex("dishes_ingredients").insert({
        dish_id: insertedDish[0].id,
        ingredient_id: ingredientId,
      });
    });

    return res.status(201).json();
  }

  async update(req, res) {
    const { body, file, params } = req;
    const { name, category, ingredients, price, description } = body;
    const filename = file?.filename;
    const { id } = params;

    const dish = await knex.from("dishes").where({ id }).first();

    const updatedDish = {
      name,
      category,
      price: Number(price.replace(/\D/g, "")),
      description,
      image: dish.image,
    };
    const ingredientsArray = ingredients.toLowerCase().split(",");

    try {
      await validate({ ...updatedDish, ingredients: ingredientsArray });
    } catch {
      throw new AppError(
        "Não foi possível atualizar um prato com esses dados",
        400
      );
    }

    if (filename) {
      const diskStorage = new DiskStorage();
      const previousFilename = dish.image;

      await diskStorage.deleteFile(previousFilename);

      const storedFilename = await diskStorage.saveFile(filename);
      updatedDish.image = storedFilename;
    }

    const prevDishIngredients = await knex
      .from("dishes_ingredients")
      .where({ dish_id: id })
      .join("ingredients", "ingredients.id", "dishes_ingredients.ingredient_id")
      .select("ingredients.id", "ingredients.name");

    const ingredientsToDelete = prevDishIngredients.filter(
      (prevIngredient) => !ingredientsArray.includes(prevIngredient.name)
    );

    await Promise.all([
      knex("dishes")
        .where({ id })
        .update({ ...updatedDish, updated_at: knex.fn.now() }),

      knex("dishes_ingredients")
        .where({ dish_id: id })
        .whereIn(
          "ingredient_id",
          ingredientsToDelete.map((ingredient) => ingredient.id)
        )
        .del(),
    ]);

    const ingredientsToAdd = ingredientsArray.filter(
      (ingredient) =>
        !prevDishIngredients.find(
          (prevIngredient) => prevIngredient.name === ingredient
        )
    );

    ingredientsToAdd.forEach(async (ingredient) => {
      const storedIngredient = await knex("ingredients")
        .where({ name: ingredient })
        .first();

      let ingredientId = storedIngredient?.id;

      if (!ingredientId) {
        const insertedIngredient = await knex("ingredients").insert(
          { name: ingredient },
          "id"
        );

        ingredientId = insertedIngredient[0].id;
      }

      await knex("dishes_ingredients").insert({
        dish_id: id,
        ingredient_id: ingredientId,
      });
    });

    return res.status(200).json();
  }
}

module.exports = DishesController;
