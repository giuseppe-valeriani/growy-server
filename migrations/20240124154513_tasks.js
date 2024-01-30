exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("task").notNullable();
    table.string("frequence").notNullable();
    table.string("icon").notNullable().references("icons");
    table.integer("points").notNullable();
    table.boolean("is_skill").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
