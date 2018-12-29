// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // allows you to process complex objects from the client side
app.use(express.json());


// Routes
// =============================================================
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);  // app is a function

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
//   View reservations
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
  
  app.use(function(req, res){
    res.sendStatus(404);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on PORT " + PORT));
