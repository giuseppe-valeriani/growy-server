const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

router.get("/list", async (req, res) => {
  try {
    const result = await knex("tasks");
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
