const express = require("express");
const router = express.Router();
// const router = reqiure('express').Router();

const marsMissions = require("../models/Mission");

//MISSIONS MODEL

const missions = require("../models/Mission");

//INDEX ROUTE

router.get("/", (req, res) => {
  // console.log(marsMissions);
  // res.send(marsMissions);
  const marsMission = marsMissions;
  res.render("indexMissions", {
    marsMission: marsMission,
  });
});

//SHOW ROUTE

router.get("/:marsMissionsIndex", (req, res) => {
  const marsMissionsIndex = req.params.marsMissionsIndex;
  const mission = marsMissions[marsMissionsIndex];
  res.render("showMissions", {
    mission: mission,
  });
  // res.send(marsMissions[marsMissionsIndex]);
});

module.exports = router;
