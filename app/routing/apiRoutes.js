const express = require("express");
const apiRoutes = express.Router();
const path = require("path");

var friendsArr = [
    {
      customerName: "Anthony",
      phoneNumber: "555-777-8888",
      customerEmail: "email@email.com",
      customerID: "test2"
    }
  ];

apiRoutes.get("/friends", function(req, res) {
  res.json(friendsArr);
});

apiRoutes.post("/friends", function(req, res) {
    let newFriend = req.body;
    console.log(newFriend);

    // if (reservationArr.length < 5) {
        friendsArr.push(newFriend);
        console.log("adding friend")
    // }
    // else {
        // waiting.push(newReservation);
        // console.log("adding waitlist")
    // }
// return, for user validation
  });


module.exports = apiRoutes;
