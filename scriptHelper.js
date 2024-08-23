// Write your helper functions here!

require('cross-fetch/polyfill');

 /* Validate Function  Task 2 */

 function validateInput(testInput) {
    
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput))
        return "Is a Number"
    }



/* formSubmission function to be passed in the eventListener "submit"  Task 2 */
 
 function formSubmission(document, list, pilotInput, copilotInput, fuelInput, cargoMass) {
    
    /* input data is passed through validateInput function */
    let pilotValid = validateInput(pilotInput);
    let copilotValid = validateInput(copilotInput);
    let fuelValid = validateInput(fuelInput);
    let cargoValid = validateInput(cargoMass)

    if (pilotValid === "Empty" || copilotValid === "Empty" || fuelValid === "Empty" || cargoValid=== "Empty") {
        alert("All fields are required!");
    }  else if (fuelValid === "Not a Number" || cargoMass === "Not a Number") {
        alert("Make sure to put valid information for each field!")
        
    }  else if (pilotValid === "Is a Number" || copilotValid === "Is a Number") {
        alert("Pilot & Co-pilot inputs must be in text format.");
        
    } 
    
    /* ------------------------------------- */

    /* Updating the launchStatus & CSS box via DOM if inputs from user are valid  Task 2 */
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

    pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch`;
    list.style.visibility = "hidden";

    let fuelNum= Number(fuelInput);
    let cargoNum = Number(cargoMass);
    let isLaunchReady = true;

/* Validation of fuel level and cargo mass Task 2 */

if (fuelNum < 10000 && cargoNum > 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    isLaunchReady = false;

} else if (fuelNum < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    isLaunchReady = false;
} else if (cargoNum > 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    isLaunchReady = false;
} else if (pilotValid === "Is a Number" || copilotValid === "Is a Number") {
    isLaunchReady = false;
} else if (fuelValid === "Not a Number" || cargoValid === "Not a Number") {
    isLaunchReady = false;

} else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        isLaunchReady = true;
}

if (isLaunchReady) {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
    list.style.visibility = "visible";
} else {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
    list.style.visibility = "visible";
}
 }

;

/* ------------------------------------------- */


/* AddDestination Function Task 3 */

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    
    let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${image}">
                 `
    
 }

 /* Fetch function Task 3 */

    async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()     
    });
 
     return planetsReturned;
 };
 
/* --------------------------------------- */

 function pickPlanet(planets) {

    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
    
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;