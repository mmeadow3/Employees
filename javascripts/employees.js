// Every employee should have a first and last name.
// Every department should have a name.
// Every employee should be assigned to either the FieldOffice or Headquarters department. This is a has-a relationship.
// Clinician employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// Operations employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// Every field office should have a unique city.
// Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// Output the following information to the console for each employee.
// 1. Full name
// 2. Department name
// 3. Expertise/responsibility






// Create a two-level prototype chain for creating employees in your business. 
// Start off with an Employee function.
// Then create two other functions named Clinician, and
// Operations that have Employee on their prototype chain.

function Employee (name1, name2) {
	this.firstName = name1;
	this.lastName = name2;
	this.department = "";
    this.job = "";
}

function Job (job) {
  this.jobname = job;
}

function Clinician (expert) {
	this.expertise = expert;
}

function Operations (responsibility) {
	this.responsibility = responsibility;
}
///////need to make prototype///////
Clinician.prototype = new Job("Clinician");	
Operations.prototype = new Job ("Operations");


// Create a two-level prototype chain for creating departments in your business. 
// Start off with a Department function. Then create two other functions named FieldOffice, 
// and Headquarters that have Department on their prototype chain.
function Department (dept) {
	this.deptName = (dept);
}

function FieldOffice (city) {
	this.city = city;
}

function Headquarters () {
	this.headquarters = "Nashville";
}
FieldOffice.prototype = new Department ("FieldOffice");
Headquarters.prototype = new Department ("Headquarters");

///////////create new employee//////////////////////////
var mikeM = new Employee("Mike", "Meadows");	/////////gives out first and last name;
mikeM.job = new Clinician("Brain Surgeon");
mikeM.department = new FieldOffice("Chicago");
// console.log("person1:", mikeM);
console.log(`${mikeM.firstName} ${mikeM.lastName} works as a ${mikeM.job.jobname} in the ${mikeM.department.city} ${mikeM.department.deptName} is a ${mikeM.job.expertise}.` );


var DrewD = new Employee("Drew", "Davis");	/////////gives out first and last name;
DrewD.job = new Operations("IT Head");
DrewD.department = new Headquarters ();
// console.log("person2:", DrewD);
console.log(`${DrewD.firstName} ${DrewD.lastName} works as a ${DrewD.job.jobname} in the ${DrewD.department.headquarters} ${DrewD.department.deptName} and works as the ${DrewD.job.responsibility}.`);

var GiannaC = new Employee("Gianna", "C");	/////////gives out first and last name;
GiannaC.job = new Clinician("Nurse");
GiannaC.department = new FieldOffice("Nashville");
// console.log("person3:", GiannaC);
console.log(`${GiannaC.firstName} ${GiannaC.lastName} works as a ${GiannaC.job.jobname} in the ${GiannaC.department.city} ${GiannaC.department.deptName} is a ${GiannaC.job.expertise}.`);

var JoeyM = new Employee("Joey", "Mckeez");	/////////gives out first and last name;
JoeyM.job = new Operations("Finance");
JoeyM.department = new FieldOffice("Nashville");
// console.log("person4:", JoeyM);
console.log(`${JoeyM.firstName} ${JoeyM.lastName} works as a ${JoeyM.job.jobname} in the ${JoeyM.department.city} ${JoeyM.department.deptName} and works in ${JoeyM.job.responsibility}.`);












