// Routing configuration
const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// GET request
router.get("/", async (req, res) => {
  try {
    const result = await knex("icons");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
