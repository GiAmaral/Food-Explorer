exports.up = (knex) =>
  knex.schema.createTable("users_favorite_dishes", (table) => {
    table.integer("user_id").references("id").inTable("users");
    table.integer("dish_id").references("id").inTable("dishes");
  });

exports.down = (knex) => knex.schema.dropTable("users_favorite_dishes");
