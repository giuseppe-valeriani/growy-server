// Server basic structure
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// Endpoints folders
const children = require("./routes/childrenRoutes");
const icons = require("./routes/iconsRoutes");
const tasks = require("./routes/tasksRoutes");
const goals = require("./routes/childGoalsRoutes");
const childTasks = require("./routes/childTasksRoutes");

// Server functionalities
app.use(cors());
app.use(express.json());
app.use(express.static("./assets"));
app.use("/children", children);
app.use("/icons", icons);
app.use("/tasks", tasks);
app.use("/children", goals);
app.use("/children", childTasks);

// Server launching
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
