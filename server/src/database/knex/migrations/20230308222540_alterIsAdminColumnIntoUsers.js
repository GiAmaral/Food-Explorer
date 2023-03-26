exports.up = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.renameColumn("isAdmin", "is_admin");
  });

exports.down = (knex) =>
  knex.schema.alterTable("users", (table) => {
    table.renameColumn("is_admin", "isAdmin");
  });
