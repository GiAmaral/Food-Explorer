exports.up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    id: table.increments("id").primary();
    name: table.string("name").notNullable();
  });

exports.down = (knex) => knex.schema.dropTable("ingredients");
