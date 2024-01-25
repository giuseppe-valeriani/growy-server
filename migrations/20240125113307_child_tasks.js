exports.up = function (knex) {
  return knex.schema.createTable("child_tasks", (table) => {
    table.increments("id").primary();
    table.integer("child_id").unsigned().references("children.id");
    table.integer("task_id").unsigned().references("tasks.id");
    table.boolean("is_completed").notNullable();
    table.boolean("is_verified").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("active");
};
