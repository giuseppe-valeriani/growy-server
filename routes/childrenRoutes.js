// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET request child list
router.get("/", async (req, res) => {
  try {
    const result = await knex("children");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST request add new child profile
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

// PATCH child points
router.patch("/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    const childObtained = await knex("children")
      .where({ id: req.params.id })
      .first();
    const points = childObtained.current_points + req.body.current_points;
    const newScore = {
      ...childObtained,
      current_points: points,
    };
    await knex("children")
      .where({ id: req.params.id })
      .first()
      .update(newScore);
    return res.status(200).json(newScore);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE children profile
router.delete("/:id", async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    await knex("children").where({ id: req.body.id }).del();
    return res.status(204).json({ message: "Recipient deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
