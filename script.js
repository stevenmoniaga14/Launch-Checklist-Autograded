// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let pilotInput = document.querySelector("input[name=pilotName]").value;
        let copilotInput = document.querySelector("input[name=copilotName]").value;
        let fuelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotInput, copilotInput, fuelInput, cargoMass);
    
    })
    
    
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanets;
    
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        // pickPlanet function randomly selects planet from fetched list
        let planet = pickPlanet(listedPlanets)
    
        // random planet selected properties are then assigned
        addDestinationInfo(document, 
            planet.name, 
            planet.diameter, 
            planet.star, 
            planet.distance, 
            planet.moons, 
            planet.image
        );
    });
    
});
 