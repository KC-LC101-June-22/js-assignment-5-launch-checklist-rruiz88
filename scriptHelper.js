// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li> 
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
   
}

//TEST USER ENTERED VALID INFO FOR EACH FIELD
function validateInput(testInput) {
   if (testInput === 0 || testInput === null || testInput === ""){
      return("Empty");
   } else if (isNaN(testInput)){
    return("Not a Number");
   } else if (!isNaN(Number(testInput))){
    return("Is a Number");
} 
}
//validateInput();

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const launchStatus = document.getElementById("launchStatus");

      //TEST USER ENTERED VALID INFO FOR EACH FIELD
      if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
         alert("All fields are required");
         //console.log("clicked");    
     }
      //Numbers for FUEL and Cargo and STRINGS for PILOTS
     else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
      alert("NUMBERS ONLY!")
     } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
      alert("Please enter realistic names and not numbers")
     } else {
      //Change launch info for pilots
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
      list.style.visibility = "visible";
}
      //LOW FUEL
      if(fuelLevel < 10000) {
         fuelStatus.innerHTML = "Not enough fuel for the journey!";
         launchStatus.innerHTML = "Shuttle Not Ready for launch";
         launchStatus.style.color = "rgb(199, 37, 78)";
         list.style.visibility = "visible";
}   
      //CARGO HIGH
else if (cargoLevel > 10000) {
         list.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch!";
         launchStatus.style.color = "rgb(199, 37, 78)";
}     else if (fuelLevel > 10000 && cargoLevel < 10000) {
         launchStatus.innerHTML = "Shuttle Ready For launch!";
         launchStatus.style.color = "rgb(65, 159, 106)";
         fuelStatus.innerHTML = "Fuel ready!";
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         list.style.visibility = "visible";
} 
      //FUEL LOW AND CARGO HEAVY
   else  (fuelLevel < 10000 && cargoLevel > 10000) 
   launchStatus.innerHTML = "Shuttle Not Ready for launch";
   launchStatus.style.color = "red";
   fuelStatus.innerHTML = "Not enough fuel for the journey";
   cargoStatus.innerHTML = "Cargo mass too heavy for launch";
   list.style.visibility = "visible";

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
       return response.json()
        //console.log(response);
       });

    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random()*planets.length);
   return planets[index];
}
//console.log(pickPlanet);
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
