exports.seed = async function (knex) {
  await knex("goals").del();
  await knex("goals").insert([
    {
      id: 1,
      child_id: 1,
      goal: "Having an ice cream",
      points: 100,
    },
    {
      id: 2,
      child_id: 1,
      goal: "Buying new shoes",
      points: 300,
    },
    {
      id: 3,
      child_id: 2,
      goal: "Trip to Disneyland",
      points: 2000,
    },
  ]);
};
