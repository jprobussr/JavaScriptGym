const jobApplicant = {
  name: 'John',
  position: 'Front-End Developer',
  location: 'Kentucky',
  skills: 'JavaScript and React',
};

const {name, position, skills} = jobApplicant;

console.log(`${name} is applying for a ${position} position and knows ${skills}.`);

// const employeeRecord = {
//   name: 'John',
//   _salary: 65000,

//   set salary(newSalary) {
//     if (newSalary > 0) {
//       this._salary = newSalary;
//     }
//   },

//   get salary() {
//     return this._salary;
//   }
// };

// employeeRecord.salary = 75000;
// console.log(employeeRecord.salary);
// console.log(employeeRecord.name);

// const student = {
//   firstName: 'John',
//   lastName: 'Probus',
//   course: 'JavaScript',

//   get studentInfo() {
//     return `${this.firstName} ${this.lastName} is studying ${this.course}`;
//   }
// };

// console.log(student.studentInfo);

// const developer = {
//   name: 'John',
//   language: 'JavaScript',

//   introduce() {
//     return `My name is ${this.name} and I write ${this.language}.`;
//   },
// };

// console.log(developer.introduce());

// const employee = {
//   name: 'John',
//   department: 'IT',
//   salary: 65000,
//   introduce () {
//     return `Hello, my name is ${this.name} and I work in the ${this.department} department.`;
//   }
// };

// console.log(employee.introduce());

// const employees = [
//   { id: 1, name: 'John', department: 'IT', salary: 65000 },
//   { id: 2, name: 'Sarah', department: 'Marketing', salary: 55000 },
//   { id: 3, name: 'Mike', department: 'IT', salary: 72000 },
//   { id: 4, name: 'Jessica', department: 'HR', salary: 58000 },
//   { id: 5, name: 'David', department: 'IT', salary: 80000 },
// ];

// const highEarnersNames = employees
//   .filter((employee) => {
//     return employee.salary > 60000;
//   })
//   .map((employee) => {
//     return employee.name;
//   });

// console.log(highEarnersNames);

// const highEarners = employees.filter((employee) => {
//   return employee.salary > 60000;
// });

// console.log(highEarners);

// const itEmployees = employees.filter((employee) => {
//   return employee.department === 'IT';
// });

// console.log(itEmployees);

// const employeeNames = employees.map((employee) => {
//   return employee.name;
// });

// console.log(employeeNames);
