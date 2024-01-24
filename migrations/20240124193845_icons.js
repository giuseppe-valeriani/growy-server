exports.up = function (knex) {
  return knex.schema.createTable("icons", (table) => {
    table.string("icon").primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("icons");
};
