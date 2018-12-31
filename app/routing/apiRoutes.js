const express = require('express');
const apiRoutes = express.Router();

// import application data
let userData = require('../data/friends');

apiRoutes.get("/friends", function(req, res) {
  res.json(userData);
});

apiRoutes.post("/friends", function(req, res) {
  let newFriend = req.body;
  console.log(newFriend);

    // convert each element to a number
    newFriend.scores.map(Number); 

    let matchIndex = 0;
    let lowDiff = 50;

    const getDiff = function(arr) {
        let diff = 0;

        for (let j = 0; j < arr.length; j++) {
            // get difference of each answer, and add it to diff 
            diff+= Math.abs(arr[j] - newFriend.scores[j]);
        }
        return diff;
    }

  for (let i = 0; i < userData.length; i++) {
    //   console.log(userData[i].name);
      let friendScores = userData[i].scores.map(Number);
    //   console.log(friendScores);

      let totalDiff = getDiff(userData[i].scores);
        // console.log("Total difference: " + totalDiff);
      // if this is the best match found so far, update matchIndex and lowDiff vars
      if (totalDiff < lowDiff) { 
          lowDiff = totalDiff;
          matchIndex = i;
        }
  }

    // after finding a match, push new user to the friends array
    userData.push(newFriend);
    console.log("Adding friend");

    // return the matched user
    res.send(userData[matchIndex]);

});

module.exports = apiRoutes;