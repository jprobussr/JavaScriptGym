// const deliveries = [
//   { id: 201, driver: 'John', miles: 450, rate: 2.50 },
//   { id: 202, driver: 'Mike', miles: 320, rate: 2.75 },
//   { id: 203, driver: 'Sarah', miles: 510, rate: 2.40 },
//   { id: 204, driver: 'David', miles: 280, rate: 3.00 },
//   { id: 205, driver: 'Robert', miles: 600, rate: 2.65 },
// ];

// const longHaulRevenue = deliveries.filter((delivery) => {
//     return delivery.miles > 400;
// }).reduce((total, delivery) => {
//     let currentRate = delivery.miles * delivery.rate;
//     return total + currentRate;
// }, 0);

// console.log(longHaulRevenue);

// const longHaulDriver = deliveries.filter((delivery) => {
//     return delivery.miles > 400;
// }).map((delivery) => {
//     return delivery.driver;
// });

// console.log(longHaulDriver);

// const totalRevenue = deliveries.reduce((total, delivery) => {
//     let currentDelivery = delivery.miles * delivery.rate;
//     return total + currentDelivery;
// }, 0);

// console.log(totalRevenue);

// const employees = [
//   { id: 101, name: 'John', department: 'IT', salary: 65000 },
//   { id: 102, name: 'Sarah', department: 'HR', salary: 58000 },
//   { id: 103, name: 'Mike', department: 'IT', salary: 72000 },
//   { id: 104, name: 'Jessica', department: 'Logistics', salary: 62000 },
//   { id: 105, name: 'David', department: 'Logistics', salary: 55000 },
//   { id: 106, name: 'Emily', department: 'Marketing', salary: 68000 },
//   { id: 107, name: 'Robert', department: 'IT', salary: 80000 },
//   { id: 108, name: 'Amanda', department: 'HR', salary: 61000 },
// ];

// const allSalariesValid = employees.every((employee) => {
//     return employee.salary > 50000;
// });

// console.log(allSalariesValid);

// const hasHighEarner = employees.some((employee) => {
//     return employee.salary > 75000;
// });

// console.log(hasHighEarner);

// const foundEmployee = employees.find((employee) => {
//     return employee.id === 107;
// });

// console.log(foundEmployee);

// const logisticsPayroll = employees.filter((employee) => {
//     return employee.department === 'Logistics';
// }).reduce((total, employee) => {
//     return total + employee.salary;
// }, 0);

// console.log(logisticsPayroll);

// const employeeSummaries = employees.map((employee) => {
//     return `${employee.name} - ${employee.department} - $${employee.salary}`;
// });

// console.log(employeeSummaries);

// const logisticsEmployees = employees.filter((employee) => {
//     return employee.department === 'Logistics';
// });

// console.log(logisticsEmployees);

// const averageSalary = employees.reduce((accumulator, employee) => {
//   return accumulator + employee.salary / employees.length;
// }, 0);

// console.log(averageSalary);

// const totalPayroll = employees.reduce((accumulator, employee) => {
//   return accumulator + employee.salary;
// }, 0);

// console.log(totalPayroll);

// const employeeIndex = employees.findIndex((employee) => {
//     return employee.id === 105;
// });

// console.log(employeeIndex);

// const highEarners = employees.filter((employee) => {
//   return employee.salary > 65000;
// });

// console.log(highEarners);

// const employeeNames = employees.map((employee) => {
//     return employee.name;
// });

// console.log(employeeNames);

// employees.forEach((employee) => {
//   console.log(`${employee.name} works in ${employee.department}.`);
// });
