exports.up = function (knex) {
  return knex.schema.createTable("children", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("current_points").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("children");
};
