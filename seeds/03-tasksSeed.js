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
    {
      id: 7,
      task: "take the rubbish out",
      frequence: "daily",
      icon: "icons/kidschores-78.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 8,
      task: "get the mail",
      frequence: "daily",
      icon: "icons/kidschores-77.png",
      points: 5,
      is_skill: false,
    },
    {
      id: 9,
      task: "water the plants",
      frequence: "sometimes",
      icon: "icons/kidschores-67.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 10,
      task: "dusting",
      frequence: "weekly",
      icon: "icons/kidschores-32.png",
      points: 20,
      is_skill: false,
    },
    {
      id: 11,
      task: "do your homeworks",
      frequence: "weekly",
      icon: "icons/kidschores-75.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 12,
      task: "cut some wood",
      frequence: "sometimes",
      icon: "icons/kidschores-90.png",
      points: 50,
      is_skill: true,
    },
    {
      id: 13,
      task: "buy some groceries",
      frequence: "weekly",
      icon: "icons/kidschores-48.png",
      points: 10,
      is_skill: true,
    },
    {
      id: 14,
      task: "make your bed",
      frequence: "daily",
      icon: "icons/kidschores-20.png",
      points: 5,
      is_skill: false,
    },
    {
      id: 15,
      task: "iron your clothes",
      frequence: "sometimes",
      icon: "icons/kidschores-10.png",
      points: 20,
      is_skill: true,
    },
    {
      id: 16,
      task: "tell the time",
      frequence: "sometimes",
      icon: "icons/everyday-102.png",
      points: 20,
      is_skill: true,
    },
    {
      id: 17,
      task: "write a letter",
      frequence: "sometimes",
      icon: "icons/everyday-52.png",
      points: 30,
      is_skill: true,
    },
    {
      id: 18,
      task: "dry your hair",
      frequence: "sometimes",
      icon: "icons/everyday-80.png",
      points: 10,
      is_skill: false,
    },
    {
      id: 19,
      task: "get your vitamins",
      frequence: "daily",
      icon: "icons/kidschores-18.png",
      points: 5,
      is_skill: false,
    },
    {
      id: 20,
      task: "tidy up",
      frequence: "daily",
      icon: "icons/kidschores-21.png",
      points: 5,
      is_skill: false,
    },
  ]);
};
