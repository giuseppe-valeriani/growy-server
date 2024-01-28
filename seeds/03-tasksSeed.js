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
      points: 10,
      is_skill: false,
    },
    {
      id: 3,
      task: "order some pizza",
      frequence: "daily",
      icon: "icons/everyday-10.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 4,
      task: "put your clothes away",
      frequence: "sometimes",
      icon: "icons/kidschores-04.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 5,
      task: "do the laundry",
      frequence: "weekly",
      icon: "icons/kidschores-09.png",
      points: 50,
      is_skill: true,
    },
    {
      id: 6,
      task: "wash the dishes",
      frequence: "daily",
      icon: "icons/kidschores-29.png",
      points: 20,
      is_skill: true,
    },
  ]);
};
