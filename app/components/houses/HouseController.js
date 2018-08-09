import HouseService from "./HouseService.js";

let houseService = new HouseService

function drawHouses() {
    let houses = houseService.getHouses()
    let template = ''
    
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
        <div class="col-3">
            <p>${house.name}</p>
            <p>${house.bedroomQty}</p>
            <p>${house.bathroomQty}</p>
            <p>${house.levels}</p>
            <p>${house.yearBuilt}</p>
            <p>${house.price}</p>
            <p>${house.imgUrl}</p>
          </div>
        `
    }
    
    document.getElementById('houses').innerHTML = template
    }



export default class HouseController {
    constructor() {
        drawHouses()
    }

    addHouse(triggeredEvent) {
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        houseService.addHouse(formData)
        formData.reset()
        drawHouses()

    }
}

