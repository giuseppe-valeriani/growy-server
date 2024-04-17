// Routing configuration
const router = require("express").Router();
module.exports = router;

const { generateToken } = require("../middlewares/auth");

// This is normally protected data on an access database
const validationList = [
  {
    user: "parent",
    password: "parent",
  },
  {
    user: "romolo",
    password: "romolo",
  },
  {
    user: "remo",
    password: "remo",
  },
  {
    user: "sara",
    password: "sara",
  },
];

router.post("/login", async (req, res) => {
  try {
    if (!req.body.user || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please provide valid user and password" });
    }
    if (
      validationList.find(
        (user) =>
          user.user === req.body.user && user.password === req.body.password
      )
    ) {
      const user = { name: req.body.user };
      const accessToken = generateToken(user);
      return res.json({ accessToken: accessToken });
    } else return res.status(403).json({ message: "Wrong credentials" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/logout", async (req, res) => {});
