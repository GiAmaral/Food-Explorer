const { Router } = require("express");

const FavoritesController = require("../controllers/FavoritesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const favoritesRouter = Router();
const favoritesController = new FavoritesController();

favoritesRouter.post(
  "/:dishId",
  ensureAuthenticated,
  favoritesController.create
);
favoritesRouter.delete(
  "/:dishId",
  ensureAuthenticated,
  favoritesController.delete
);

module.exports = favoritesRouter;
