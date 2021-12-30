const express = require("express");

const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(cors());

const todoRoutes = require("./route");

app.use(express.json());

app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server  i s running on port =${PORT}`);
});

module.exports = app;
