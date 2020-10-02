// const router = require("express").Router();

const express = require("express");
const router = express.Router();

//Missions Model

const marsMissions = require("../models/Missions");

// INDEX MISSIONS

router.get("/", (req, res) => {
  // console.log(marsMissions);
  //   res.send(marsMissions);
  //   res.render("index");
});

// SHOW MISSIONS

router.get("/:marsMissionsIndex", (req, res) => {
  const marsMissionsIndex = req.params.marsMissionsIndex;
  const marsMission = marsMissions[marsMissionsIndex];

  if (marsMissions[marsMissionsIndex]) {
    res.render("marsMissions/showmarsMissions", {
      marsMissions: { name: "Does not exist" },
    });
  }

  res.render("/marsMissions/showmarsMissions", "marsMission");

  //   if (marsMissions[marsMissionsIndex]) {
  //     res.send(marsMissions[marsMissionsIndex]);
  //   } else {
  //     res.send("Sorry, that mission does not exist.");
  //   }

  // res.send(`marsMissions show route. Index = ${req.params.marsMissionsIndex}`);
  // res.send(marsMissions[req.params.marsMissionsIndex]);
  // const marsMissionsIndex = req.params.marsMissionsIndex;
});

module.exports = router;
