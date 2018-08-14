import JobService from "./JobService.js";

let jobService = new JobService()

function drawJobs(jobs) {
let template = ''
for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div class="col-3">
        <p>${job.company}</p>
        <p>${job.jobTitle}</p>
        <p>${job.rate}</p>
        <p>${job.description}</p>
        <button onclick="app.controllers.jobController.deleteJob('${job._id}')">delete</button>
      </div>
    `
}

document.getElementById('jobs').innerHTML = template
}

export default class JobController {
    constructor() {
       jobService.getJobs(drawJobs)
    }
    
    addJob(e) {
        e.preventDefault();
        let formData = e.target
        jobService.addJob(formData, drawJobs)
        formData.reset()
    }
    
    deleteJob(jobId) {
        jobService.deleteJob(jobId, drawJobs)
    }
}