// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET all completed goals
router.get("/goals", async (req, res) => {
  const response = await knex("child_tasks").where({ is_completed: true });
  return res.status(200).json(response);
});

// GET child list of goals
router.get("/:id/goals", async (req, res) => {
  const response = await knex("goals").where({ child_id: req.params.id });
  return res.status(200).json(response);
});

// POST child goal
router.post("/:id/goals/add", async (req, res) => {
  if (!req.body.goal || !req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  const newGoal = {
    goal: req.body.goal,
    child_id: req.params.id,
    points: 0,
  };
  try {
    const created = await knex("goals").insert(newGoal);
    const response = await knex("goals").where({ id: created[0] }).first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// PATCH goal
router.patch("/goals/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    const goalObtained = await knex("goals")
      .where({ id: req.params.id })
      .first();
    const evaluatedGoal = { ...goalObtained, points: req.body.points || 0 };
    await knex("goals")
      .where({ id: req.params.id })
      .first()
      .update(evaluatedGoal);
    return res.status(200).json(evaluatedGoal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE a gol
router.delete("/goals/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    await knex("goals").where({ id: req.params.id }).del();
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
