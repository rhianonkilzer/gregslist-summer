export default class Job {
    constructor(data) {
        this.jobName = data.jobName
        this.jobType = data.jobType
        this.payRate = data.payRate
        this.description = data.description
    }
}
