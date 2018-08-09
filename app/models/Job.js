export default class Job {
    constructor(
        jobName,
        jobType,
        position,
        payRate,
        hours
    ) {
        this.jobName = jobName
        this.jobType = jobType
        this.position = position
        this.payRate = payRate
        this.hours = hours
    }
}