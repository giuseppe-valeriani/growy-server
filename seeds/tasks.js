exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      id: 1,
      child_id: 1,
      task: "brush your teeth",
      frequence: "daily",
      icon: "icons/kidschores-23.png",
      points: 5,
      is_skill: false,
      is_active: true,
      is_completed: false,
    },
    {
      id: 2,
      child_id: 1,
      task: "walk the dog",
      frequence: "daily",
      icon: "icons/kidschores-86.png",
      points: 5,
      is_skill: false,
      is_active: true,
      is_completed: false,
    },
    {
      id: 3,
      child_id: 2,
      task: "brush your teeth",
      frequence: "daily",
      icon: "icons/lemonadepixel_kidschores-23.png",
      points: 5,
      is_skill: false,
      is_active: true,
      is_completed: false,
    },
  ]);
};
