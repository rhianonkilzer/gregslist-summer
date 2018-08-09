import Job from "../../models/Job.js"

let jobs = []

export default class JobService{
    constructor() {

    }
    getJobs() {
        let jobsCopy = []
        jobs.forEach(job => {
            jobsCopy.push(new Job(
                job.jobName,
                job.jobType,
                job.position,
                job.payRate,
                job.hours
            ))
        })
        return jobsCopy
    }
    
    
    addJob(formData) {
        let newJob = new Job(
            formData.jobName.value,
            formData.jobType.value,
            formData.position.value,
            formData.payRate.value,
            formData.hours.value
        )
        jobs.push(newJob)
        console.log(jobs)
    }
    
}
