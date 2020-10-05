// DEPENDENCIES
const express = require("express");
const app = express();
const port = 3000;

//SET VIEW ENGINE

app.set("view engine", "ejs");

//MISSIONS CONTROLLER

const missionsCtrl = require("./controllers/marsMissionsController");
const marsMissions = require("./models/Mission");

//HOME ROUTE

app.get("/", (req, res) => {
  res.render("indexMissions");
});

//MISSIONS ROUTE

app.use("/marsMissions", missionsCtrl);

// LISTENER
app.listen(port, function () {
  console.log("Missions to Mars running on port: ", port);
});

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
// const marsMissions = [
//   {
//     name: "Curiosity",
//     launchDate: "26 Nov 2011",
//     operator: "NASA",
//     missionType: "Rover",
//     img: "",
//   },
//   {
//     name: "Opportunity",
//     launchDate: "8 Jul 2003",
//     operator: "NASA",
//     missionType: "Rover",
//     img: "",
//   },
//   {
//     name: "Spirit",
//     launchDate: "10 Jun 2003",
//     operator: "NASA",
//     missionType: "Rover",
//     img: "",
//   },
//   {
//     name: "Sojourner",
//     launchDate: "4 Dec 1996",
//     operator: "NASA",
//     missionType: "Rover",
//     img: "",
//   },
//   {
//     name: "Rosetta",
//     launchDate: "2 Mar 2004",
//     operator: "ESA",
//     missionType: "Gravity Assist",
//     img: "",
//   },
// ];

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
