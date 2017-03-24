// store properties in variable
var job_types = {
  engineer: "Apple",
  sales: "IBM",
  design: "Google"
}

// add object property
job_types.support = "Amazon";

// remove object property
delete job_types.engineer;

// list properties and values
console.log(job_types);

// list object properites only
console.log(Object.keys(job_types));
