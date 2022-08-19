// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { validateInput } = require("./scriptHelper");



window.addEventListener("load", function() {
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(("click"));
    
    const pilot = document.querySelector("input[name=pilotName]").value
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoLevel = document.querySelector("input[name=cargoMass]").value;
    const list = document.getElementById("faultyItems");
    

   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   
})

//form.reset();


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       const name = planet.name;
       const diameter = planet.diameter;
       const star = planet.star;
       const distance = planet.distance;
       const moons = planet.moons;
       const imageUrl = planet.image;
addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
   
});