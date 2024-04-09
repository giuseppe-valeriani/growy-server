// Server basic structure
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

// Endpoints folders
const childrenRoutes = require("./routes/childrenRoutes");
const iconsRoutes = require("./routes/iconsRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const childGoalsRoutes = require("./routes/childGoalsRoutes");
const childTasksRoutes = require("./routes/childTasksRoutes");

// Server functionalities
app.use(cors());
app.use(express.json());
app.use(express.static("./assets"));
app.use("/children", childrenRoutes);
app.use("/icons", iconsRoutes);
app.use("/tasks", tasksRoutes);
app.use("/children", childGoalsRoutes);
app.use("/children", childTasksRoutes);

// Server launching
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
