exports.up = function (knex) {
  return knex.schema.createTable("goals", (table) => {
    table.increments("id").primary();
    table.integer("child_id").unsigned().references("children.id");
    table.string("goal").notNullable();
    table.integer("points");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("goals");
};
