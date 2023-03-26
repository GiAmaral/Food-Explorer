const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const { validate } = require("./validations/sessions");

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    try {
      await validate({ email, password });
    } catch (err) {
      throw new AppError("Não foi possível validar esses dados", 400);
    }

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("Combinação de email e senha incorretos", 401);
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new AppError("Combinação de email e senha incorretos", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.status(201).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: !!user.is_admin,
      },
      token,
    });
  }
}

module.exports = SessionsController;
