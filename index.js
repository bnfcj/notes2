// Check if the app is not running in production mode
let morgan = null;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  morgan = require("morgan");
}
// Import the Express framework and Initialize an Express app
const express = require("express");
const app = express();

// Import notesRoutesGroup
const notesRoutesGroup = require("./routesGroup/notesRoutesGroup");

// Import notesMiddlewaresgroup
const notesMiddlewaresGroup = require("./middlewaresGroup/notesMiddlewaresGroup");

//Import keepAlive
const keepAlive = require("./helpers/keepAlive");
// Use the 'cors' middleware to allow cross-origin requests
app.use(require("cors")());

// Use some more middlewares
if (morgan) app.use(morgan("tiny"));
app.use(express.json());

// Routes
notesRoutesGroup(app);
// Error Handler
notesMiddlewaresGroup(app);
// Listen at PORT
const PORT = process.env.PORT || 3001;

app.listen(PORT);

// Node fetch
keepAlive();
