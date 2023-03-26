const knex = require("../database/knex");

class FavoritesController {
  async create(req, res) {
    const { dishId } = req.params;
    const { id: userId } = req.user;

    await knex("users_favorite_dishes").insert({
      dish_id: Number(dishId),
      user_id: userId,
    });

    return res.status(201).json();
  }

  async delete(req, res) {
    const { dishId } = req.params;
    const { id: userId } = req.user;

    await knex("users_favorite_dishes")
      .where({ dish_id: Number(dishId), user_id: userId })
      .del();

    return res.status(204).json();
  }
}

module.exports = FavoritesController;
