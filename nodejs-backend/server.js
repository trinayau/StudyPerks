const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());

// Root route
app.get('/', (req, res) => res.send("Hello, world! Welcome to EduHacks\'s API!"));

module.exports = app;
