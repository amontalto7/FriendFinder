// module.exports = (function() {
//     'use strict';

//     let apiRoutes = require('express').Router();

//     // apiRoutes.use(express.urlencoded({ extended: true })); // allows you to process complex objects from the client side
//     // apiRoutes.use(express.json());
    

//     apiRoutes.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });
  

//     apiRoutes.get("/api/friends", function(req, res) {
//         // res.json(reservationArr);
//         res.send('Hello ExternalRoutes!');
//     });

//     return apiRoutes;
// })();

const express = require('express');
const router = express.Router();
const path = require('path');


    router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.send('Hello World!');
});

  
module.exports = router;