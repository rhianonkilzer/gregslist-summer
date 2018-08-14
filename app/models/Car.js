export default class Car {
  constructor(data) {
    this._id = data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.color = data.color
    this.imgUrl = data.imgUrl
  }
}