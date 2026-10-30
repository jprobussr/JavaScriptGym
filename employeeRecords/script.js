const drivers = [
  { id: 201, name: 'John', status: 'Available', miles: 1250 },
  { id: 202, name: 'Sarah', status: 'On Delivery', miles: 1800 },
  { id: 203, name: 'Mike', status: 'Available', miles: 950 },
  { id: 204, name: 'David', status: 'Off Duty', miles: 2100 },
  { id: 205, name: 'Robert', status: 'On Delivery', miles: 1650 },
];

const topDriver = drivers.reduce((highest, driver) => {
    return driver.miles > highest.miles ? driver : highest;
}, drivers[0]);

console.log(topDriver);

// const availableDrivers = drivers.filter((driver) => {
//     return driver.status === 'Available';
// }).map((driver) => {
//     return driver.name
// }).reverse();

// console.log(availableDrivers);

// const allDriversQualified = drivers.every((driver) => {
//     return driver.miles >= 900;
// });

// console.log(allDriversQualified);

// const averageMiles = drivers.reduce((total, driver) => {
//     return total + driver.miles / drivers.length;
// }, 0);

// console.log(averageMiles);

// const hasAvailableDriver = drivers.some((driver) => {
//     return driver.status === 'Available';
// });

// console.log(hasAvailableDriver);

// const updatedDrivers = drivers.map((driver) => {
//     if (driver.id === 202) {
//         return {...driver, status: 'Available'}
//     }

//     return driver;
// });

// console.log(updatedDrivers);

// const selectedDriver = drivers.find((driver) => {
//     return driver.id === 204;
// });

// console.log(selectedDriver);

// const deliveries = [
//   { id: 101, driver: 'John', miles: 450, revenue: 1200 },
//   { id: 102, driver: 'Sarah', miles: 320, revenue: 850 },
//   { id: 103, driver: 'Mike', miles: 510, revenue: 1450 },
//   { id: 104, driver: 'David', miles: 280, revenue: 700 },
//   { id: 105, driver: 'Robert', miles: 600, revenue: 1700 },
// ];

// const highMilageRevenue = deliveries
//   .filter((delivery) => {
//     return delivery.miles > 400;
//   })
//   .reduce((total, delivery) => {
//     return total + delivery.revenue;
//   }, 0);

// console.log(highMilageRevenue);

// const highMileageDrivers = deliveries
//   .filter((delivery) => {
//     return delivery.miles > 400;
//   })
//   .map((delivery) => {
//     return delivery.driver;
//   });

// console.log(highMileageDrivers);

// const drivers = ['John', 'Mike', 'Sarah', 'David', 'Robert'];

// const reversedDrivers = [...drivers].reverse();

// console.log(reversedDrivers);
// console.log(drivers);

// const employees = ['John', 'Sarah', 'Mike', 'Jessica'];

// const reversedEmployees = employees.reverse();

// console.log(reversedEmployees);

// const numbers = [10, 20, 30, 40, 50];

// numbers.reverse();

// console.log(numbers);

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
