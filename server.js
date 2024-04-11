// Server basic structure
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
const { authenticateToken } = require("./middlewares/auth");

// Endpoints folders
const accessRoutes = require("./routes/accessRoutes");
const childrenRoutes = require("./routes/childrenRoutes");
const iconsRoutes = require("./routes/iconsRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const childGoalsRoutes = require("./routes/childGoalsRoutes");
const childTasksRoutes = require("./routes/childTasksRoutes");

// Server functionalities
app.use(cors());
app.use(express.json());
app.use(express.static("./assets"));
app.use("/", accessRoutes);
app.use("/children", authenticateToken, childrenRoutes);
app.use("/icons", authenticateToken, iconsRoutes);
app.use("/tasks", authenticateToken, tasksRoutes);
app.use("/children", authenticateToken, childGoalsRoutes);
app.use("/children", authenticateToken, childTasksRoutes);

// Server launching
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
