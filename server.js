// Dependencies
// =============================================================
const express = require('express');
// const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // allows you to process complex objects from the client side
app.use(express.json());

app.use(express.static("app/public/")); 

// Routes
// =============================================================
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on PORT " + PORT));