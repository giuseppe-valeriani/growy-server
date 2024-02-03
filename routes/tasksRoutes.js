// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET requests list of tasks
router.get("/list", async (req, res) => {
  try {
    const result = await knex("tasks");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/fast", async (req, res) => {
  try {
    const result = await knex("tasks").select("id", "task", "icon");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST request new task
router.post("/add", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Bad request" });
    }

    if (!req.body.task || !req.body.frequence || !req.body.points) {
      return res
        .status(400)
        .json({ message: "Incomplete request, missing fields" });
    }

    const newTask = {
      task: req.body.task,
      frequence: req.body.frequence,
      icon: req.body.icon || "",
      points: Number(req.body.points),
      is_skill: Number(req.body.is_skill),
    };

    const created = await knex("tasks").insert(newTask);
    const response = await knex("tasks").where({ id: created[0] }).first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//DELETE a task
router.delete("/:id", async (req, res) => {
  await knex("tasks").where({ id: req.params.id }).del();
  return res.status(204).json({ message: "task deleted" });
});

module.exports = router;
