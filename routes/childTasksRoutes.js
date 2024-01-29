// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET request on single child list of tasks
router.get("/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    const result = await knex("child_tasks")
      .where({ child_id: req.params.id })
      .join("children", "children.id", "child_tasks.child_id")
      .join("tasks", "tasks.id", "child_tasks.task_id")
      .select(
        "child_tasks.id",
        "children.name",
        "children.current_points",
        "tasks.task",
        "tasks.icon",
        "tasks.frequence",
        "tasks.points",
        "tasks.is_skill",
        "child_tasks.is_completed",
        "child_tasks.is_verified"
      );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST request on single child task
router.post("/:id/add", async (req, res) => {
  if (!req.params.id || !req.body.id) {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const addTask = {
      child_id: req.params.id,
      task_id: req.body.id,
      is_completed: false,
      is_verified: false,
    };

    const created = await knex("child_tasks").insert(addTask);
    const response = await knex("child_tasks")
      .where({ id: created[0] })
      .first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
