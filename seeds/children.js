exports.seed = async function (knex) {
  await knex("children").del();
  await knex("children").insert([
    { id: 1, name: "romolo", current_points: 40 },
    { id: 2, name: "remo", current_points: 80 },
  ]);
};
