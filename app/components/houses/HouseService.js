import House from '../../models/House.js'

// @ts-ignore
const housesApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',
    timeout: 3000
})

export default class HouseService {
    constructor() {

    }

    getHouses(draw) {
        housesApi.get()
            .then(res => {
                let houses = res.data.data.map(rawHouse => {
                    return new House(rawHouse)
                })
                draw(houses)
            })
    }

    addHouse(formData, draw) {
        let newHouse = new House({
            bedrooms: formData.bedroomQty.value,
            bathrooms: formData.bathroomQty.value,
            levels: formData.levels.value,
            year: formData.yearBuilt.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value
        })
        housesApi.post('', newHouse)
            .then(res => {
                this.getHouses(draw)
            })
    }

}