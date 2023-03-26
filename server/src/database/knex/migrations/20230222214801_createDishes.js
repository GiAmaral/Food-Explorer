exports.up = (knex) =>
  knex.schema.createTable("dishes", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.integer("price").notNullable();
    table.string("category").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("dishes");
