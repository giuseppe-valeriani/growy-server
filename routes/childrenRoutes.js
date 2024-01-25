// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET request
router.get("/", async (req, res) => {
  try {
    const result = await knex("children");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST request
router.post("/add", async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Bad request, missing name" });
  }
  const newTast = {
    name: req.body.name,
    current_points: 0,
  };

  try {
    const created = await knex("children").insert(newTast);
    const response = await knex("children").where({ id: created[0] }).first();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// GET request on single child
router.get("/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    const result = await knex("child_tasks").where({ child_id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: message });
  }
});
module.exports = router;
