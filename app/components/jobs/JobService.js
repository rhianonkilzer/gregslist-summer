import Job from "../../models/Job.js"

// @ts-ignore
const jobsApi = axios.create({
    baseURL:'https://bcw-gregslist.herokuapp.com/api/jobs/',
    timeout: 3000
})

export default class JobService {
    constructor() {

    }
    getJobs(draw) {
        jobsApi.get()
            .then(res => {
                let jobs = res.data.data.map(rawJob => {
                    return new Job(rawJob)
                })
                draw(jobs)
            })
    }


    addJob(formData, draw) {
        let newJob = new Job({
          company: formData.company.value,
           jobTitle: formData.jobTitle.value,
           rate: formData.rate.value,
           hours: formData.hours.value
        })
        jobsApi.post('', newJob)
            .then(res => {
                this.getJobs(draw)
            })
    }
    deleteJob(jobId, draw) {
        jobsApi.delete(jobId)
          .then(res => {
            this.getJobs(draw)
          })
      }
}
