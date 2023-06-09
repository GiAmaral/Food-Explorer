exports.up = (knex) =>
  knex.schema.createTable("dishes_ingredients", (table) => {
    table.integer("dish_id").references("id").inTable("dishes");
    table.integer("ingredient_id").references("id").inTable("ingredients");
  });

exports.down = (knex) => knex.schema.dropTable("dishes_ingredients");
