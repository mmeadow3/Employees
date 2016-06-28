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
	this.deptName = [];
}

function FieldOffice (city) {
	this.city = city;
}

function Headquarters () {
	this.Headquarters = "Nashville";
}
FieldOffice.prototype = new Department ();
Headquarters.prototype = new Department ();

///////////create new employee//////////////////////////
var mikeM = new Employee("Mike", "Meadows");	/////////gives out first and last name;
mikeM.Job = new Clinician("Brain Surgeon");
mikeM.FieldOffice = new FieldOffice("Nashville");
console.log("person:", mikeM);

var DrewD = new Employee("Drew", "Davis");	/////////gives out first and last name;
DrewD.Job = new Clinician("Brain Surgeon");
DrewD.FieldOffice = new FieldOffice("Nashville");
console.log("person:", DrewD);

var GiannaC = new Employee("Gianna", "C");	/////////gives out first and last name;
GiannaC.Job = new Clinician("Brain Surgeon");
GiannaC.FieldOffice = new FieldOffice("Nashville");
console.log("person:", GiannaC);












