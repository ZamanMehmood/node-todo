const express = require('express');

const bodyParser = require('body-parser');

const todoRoutes = require('./route');

const app = express();

app.use(express.json());

app.use('/todo', todoRoutes);

const server = app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

module.exports = app;
