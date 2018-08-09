import House from '../../models/House.js'

let houses = []

export default class HouseService {
    constructor() {

    }

    getHouses() {
        let housesCopy = []
        houses.forEach(house => {
            housesCopy.push(new House(
                house.name,
                house.bedroomQty,
                house.bathroomQty,
                house.houseType,
                house.levels,
                house.yearBuilt,
                house.price,
                house.imgUrl
            ))
        })
        return housesCopy
    }


    addHouse(formData) {
        let newHouse = new House(
            formData.name.value,
            formData.bedroomQty.value,
            formData.bathroomQty.value,
            formData.houseType.value,
            formData.levels.value,
            formData.yearBuilt.value,
            formData.price.value,
            formData.imgUrl.value
        )
        houses.push(newHouse)
        console.log(houses)
    }

}