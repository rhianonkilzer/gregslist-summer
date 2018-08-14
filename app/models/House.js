

export default class House {
    constructor(data) {
        this._id = data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }
}