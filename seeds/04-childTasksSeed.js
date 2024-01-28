exports.seed = async function (knex) {
  return await knex("child_tasks").insert([
    { child_id: 1, task_id: 1, is_completed: true, is_verified: true },
    { child_id: 1, task_id: 2, is_completed: true, is_verified: false },
    { child_id: 1, task_id: 5, is_completed: false, is_verified: false },
    { child_id: 2, task_id: 1, is_completed: false, is_verified: false },
    { child_id: 2, task_id: 4, is_completed: true, is_verified: false },
  ]);
};
