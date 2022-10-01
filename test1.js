function match(candidate, job) {
  let percent = job.maxSalary / 100 * 10;
  return (!candidate || !job) ? false : (candidate.minSalary <= job.maxSalary + percent) ? true : false;
}