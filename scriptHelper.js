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
   if (testInput === undefined || testInput === null || testInput === ""){
      return("Empty");
      list.style.visibility = "hidden";
   } else if (isNaN(testInput)){
    return("Not a Number");
    list.style.visibility = "hidden";
   } else if (!isNaN(testInput)){
    return("Is a Number");
    list.style.visibility = "hidden";
} 
list.style.visibility = "hidden";
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //list.style.visibility = "hidden";
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const launchStatus = document.getElementById("launchStatus");
      //list.style.visibility = "hidden";
      //TEST USER ENTERED VALID INFO FOR EACH FIELD
      if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
         alert("All fields are required");
         list.style.visibility = "hidden";
      } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
         alert("Please enter realistic names and not numbers");
             list.style.visibility = "hidden";
      } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
         alert("NUMBERS ONLY!");
             list.style.visibility = "hidden";
      } else {
                pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                list.style.visibility = "hidden";
      }     
     
   //   }
   //    //Numbers for FUEL and Cargo 
   
   //   //and STRINGS for PILOTS
   
   //    //Change launch info for pilots

   //    
   list.style.visibility = "hidden";
      //FUEL LOW / CARGO HIGH
       if(fuelLevel < 10000 && cargoLevel > 10000) {
          fuelStatus.innerHTML = "Fuel level too low for launch"
          launchStatus.innerHTML = "Shuttle Not Ready for Launch";
          launchStatus.style.color = "rgb(199, 37, 78)";
          list.style.visibility = "visible";
          //pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
          //copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
          cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  
       
       } //FUEL HIGH CARGO HIGH
       else if (fuelLevel >= 10000 && cargoLevel >= 10000){
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                list.style.visibility = "visible";
                //pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                //copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       
       }  //FUEL LOW AND CARGO LOW
       else if (fuelLevel < 10000 && cargoLevel < 10000) {
       launchStatus.innerHTML = "Shuttle Not Ready for Launch";
       launchStatus.style.color = "rgb(199, 37, 78)";
       fuelStatus.innerHTML = "Fuel level too low for launch";
       cargoStatus.innerHTML = "Cargo mass low enough for launch";
           list.style.visibility = "visible";
       //    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
       //    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       }   //FUEL HIGH / CARGO LOW 
       else {
         list.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         launchStatus.innerHTML = "Shuttle is Ready for Launch";
         launchStatus.style.color = "rgb(65, 159, 106)";
         //pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
         //copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         fuelStatus.innerHTML = "Fuel level high enough for launch";
       }  


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
