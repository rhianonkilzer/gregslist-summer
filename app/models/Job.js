export default class Job {
    constructor(data) {
        this._id = data._id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.rate = data.rate
        this.description = data.description
    }
}
