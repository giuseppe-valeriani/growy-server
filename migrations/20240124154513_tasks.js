exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.integer("child_id").unsigned().references("children.id");
    table.string("task").notNullable();
    table.string("frequence").notNullable();
    table.string("icon").notNullable();
    table.integer("points").notNullable();
    table.boolean("is_skill").notNullable();
    table.boolean("is_active").notNullable();
    table.boolean("is_completed").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
