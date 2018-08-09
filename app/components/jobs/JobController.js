import JobService from "./JobService.js";

let jobService = new JobService()

function drawJobs() {
let jobs = jobService.getJobs()
let template = ''

for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div class="col-3">
        <p>${job.jobName}</p>
        <p>${job.jobType}</p>
        <p>${job.position}</p>
        <p>${job.payRate}</p>
        <p>${job.hours}</p>
      </div>
    `
}

document.getElementById('jobs').innerHTML = template
}

export default class JobController {
    constructor() {
        drawJobs()
    }
    
    addJob(triggeredEvent) {
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        jobService.addJob(formData)
        formData.reset()
        drawJobs()
    }
    
}