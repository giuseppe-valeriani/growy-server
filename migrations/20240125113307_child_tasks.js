exports.up = function (knex) {
  return knex.schema.createTable("child_tasks", (table) => {
    table.increments("id").primary();
    table
      .integer("child_id")
      .unsigned()
      .references("children.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("task_id")
      .unsigned()
      .references("tasks.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.boolean("is_completed").notNullable();
    table.boolean("is_verified").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("child_tasks");
};
