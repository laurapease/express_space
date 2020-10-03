const express = require("express");
const marsMissions = require("../models/Mission");
const router = express.Router();

//MISSIONS MODEL

const Missions = require("../models/Mission");

//INDEX ROUTE

router.get("/", (req, res) => {
  res.send(marsMissions);
  res.render("./index");
});

//SHOW ROUTE

router.get("/:missionsIndex", (req, res) => {
  const missionsIndex = req.params.missionsIndex;
  const mission = marsMissions[missionsIndex];
  res.render("./show", mission);
});

module.exports = router;
