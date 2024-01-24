const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const tasks = require("./routes/tasksRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("./assets"));
app.use("/tasks", tasks);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
