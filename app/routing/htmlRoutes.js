const express = require("express");
const htmlRoutes = express.Router();
const path = require("path");

// route to main page
htmlRoutes.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route to survey
htmlRoutes.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// htmlRoutes.use(express.static(__dirname + "../public", {maxAge: 3456700000})); 

// catch all
  htmlRoutes.use(function(req, res){
    res.sendStatus(404);
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlRoutes;