exports.up = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.boolean("isAdmin").notNullable().defaultTo(false);
  });

exports.down = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.dropColumn("isAdmin");
  });
