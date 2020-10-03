// DEPENDENCIES
const express = require("express");
const app = express();
const port = 3000;

// SET VIEW ENGINE
app.set("view engine", "ejs");

// MISSIONS CONTROLLER

const marsMissionsCtrl = require("./controllers/marsMissionsController");
const marsMissions = require("./models/Mission");

//HOME ROUTE

app.get("/", (req, res) => {
  res.render("index");
});

// MISSIONS ROUTES

app.use("/marsMissions", marsMissionsCtrl);

app.listen(port, function () {
  console.log("Missions to Mars running on port: ", port);
});

//INDEX ROUTE

// app.get("/marsMissions", (req, res) => {});

//SHOW ROUTE

// app.get("/marsMissions/:missionsIndex", (req, res) => {
//   const missionsIndex = req.params.missionsIndex;

//   if (marsMissions[missionsIndex]) {
//     res.send(marsMissions[missionsIndex]);
//   } else {
//     res.send("Sorry, that mission does not exist.");
//   }
// });

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

// LISTENER
