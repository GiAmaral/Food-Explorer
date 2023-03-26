const knex = require("../database/knex");
const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const { validate } = require("./validations/users");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    try {
      await validate({ name, email, password });
    } catch {
      throw new AppError(
        "Não foi possível criar uma conta com esses dados",
        400
      );
    }

    const userExists = await knex("users").where({ email }).first();

    if (userExists) {
      throw new AppError("Usuário já cadastrado", 400);
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json();
  }
}

module.exports = UsersController;
