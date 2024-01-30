exports.up = function (knex) {
  return knex.schema.createTable("icons", (table) => {
    table.increments("id").primary();
    table.string("icon").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("icons");
};
