const express = require('express');
const apiRoutes = express.Router();
const path = require('path');

// import application data
let userData = require('../data/friends');

apiRoutes.get("/friends", function(req, res) {
  res.json(userData);
});

apiRoutes.post("/friends", function(req, res) {
  let newFriend = req.body;
  console.log(newFriend);

  userData.push(newFriend);
  console.log("adding friend");

  // return, for user validation
});

module.exports = apiRoutes;