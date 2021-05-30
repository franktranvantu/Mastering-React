const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);