

export default class House {
    constructor(data) {
        this._id = data._id
        this.bedroomQty = data.bedroomQty
        this.bathroomQty = data.bathroomQty
        this.levels = data.levels
        this.yearBuilt = data.yearBuilt
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }
}