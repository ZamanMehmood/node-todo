const express = require("express");

const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(cors());

const todoRoutes = require("./route");

app.use(express.json());

app.use("/todo", todoRoutes);

const server = app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

module.exports = app;
