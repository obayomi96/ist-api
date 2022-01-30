const express = require('express');
const cors = require('cors');
require('dotenv').config();

const Routes = require('./app/routes');

const app = express();
const port = process.env.port;

app.use([
  cors(),
  Routes
]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
