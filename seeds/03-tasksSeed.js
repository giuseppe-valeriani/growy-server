exports.seed = async function (knex) {
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      id: 1,
      task: "brush your teeth",
      frequence: "daily",
      icon: "icons/kidschores-23.png",
      points: 5,
      is_skill: false,
    },
    {
      id: 2,
      task: "walk the dog",
      frequence: "daily",
      icon: "icons/kidschores-86.png",
      points: 5,
      is_skill: false,
    },
    {
      id: 3,
      task: "eat some pizza",
      frequence: "daily",
      icon: "icons/kidschores-10.png",
      points: 5,
      is_skill: false,
    },
  ]);
};
