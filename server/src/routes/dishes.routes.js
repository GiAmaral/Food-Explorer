const { Router } = require("express");
const multer = require("multer");
const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const uploadConfig = require("../configs/upload");

const dishesRouter = Router();
const dishesController = new DishesController();
const upload = multer(uploadConfig.MULTER);

dishesRouter.get("/", ensureAuthenticated, dishesController.index);
dishesRouter.get("/:id", ensureAuthenticated, dishesController.show);
dishesRouter.post(
  "/",
  ensureAuthenticated,
  upload.single("image"),
  dishesController.create
);
dishesRouter.put(
  "/:id",
  ensureAuthenticated,
  upload.single("image"),
  dishesController.update
);

module.exports = dishesRouter;
