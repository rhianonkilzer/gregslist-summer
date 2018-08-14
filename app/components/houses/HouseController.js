import HouseService from "./HouseService.js";

let houseService = new HouseService

function drawHouses(houses) {
    let template = ''
    
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
        <div style="outline: 1px solid black" class="col-3">
            <p>${house.description}</p>
            <p>${house.bedroomQty}</p>
            <p>${house.bathroomQty}</p>
            <p>${house.levels}</p>
            <p>${house.yearBuilt}</p>
            <p>${house.price}</p>
            <button onclick="app.controllers.houseController.bid('${house._id}', ${house.price})">bid</button>
            <img src="${house.imgUrl}" alt="somethingelse">
            <button onclick="app.controllers.houseController.deleteHouse('${house._id}')">delete</button>
          </div>
        `
    }
    
    document.getElementById('houses').innerHTML = template
    }



export default class HouseController {

    constructor() {
   houseService.getHouses(drawHouses)
    }

  addHouse(e) {
      e.preventDefault();
      let formData = e.target
      houseService.addHouse(formData, drawHouses)
      formData.reset()
  }

deleteHouse(houseId) {
    houseService.deleteHouse(houseId, drawHouses)
}

bid(houseId, price) {
    price += 1000
    let update = {
        price: price

    }
    houseService.bid(houseId, update, drawHouses)
}
}
