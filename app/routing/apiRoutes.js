const express = require("express");
const apiRoutes = express.Router();
const path = require("path");

var userData = [
  {
    name: "Stacey",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
  {
    name: "Jon Snow",
    photo:
      "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  }
];

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
