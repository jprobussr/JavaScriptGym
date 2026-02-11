const employees = {
  e101: { name: "Alice", salary: 72000, active: true },
  e102: { name: "Bob", salary: 48000, active: false },
  e103: { name: "Charlie", salary: 95000, active: true },
  e104: { name: "Dana", salary: 54000, active: true }
};

const employeeEntries = Object.entries(employees);

const highEarners = employeeEntries.filter((entry) => {
  const employee = entry[1];
  return employee.salary >= 60000;
});

const messages = highEarners.map((entry) => {
  const id = entry[0];
  const employee = entry[1];
  return `ID: ${id} Employee: ${employee.name} $${employee.salary}`;
});

console.log(messages);

// highEarners.forEach((entry) => {
//   const id = entry[0];
//   const employee = entry[1];

//   console.log(`ID: ${id} Employee: ${employee.name} $${employee.salary}`);
// });

// const employeeEntries = Object.entries(employees);

// const highEarners = employeeEntries.filter((entry) => {
//   const employee = entry[1];
//   return employee.salary >= 60000
// });

// console.log(typeof highEarners)

// const employeeEntries = Object.entries(employees);

// console.log(employeeEntries[0]);


// const books = {
//   b001: { title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true },
//   b002: { title: '1984', price: 15.99, isAvailable: false },
//   b003: { title: 'The Great Gatsby', price: 12.49, isAvailable: true },
//   b004: { title: 'Moby Dick', price: 22.5, isAvailable: false },
// };

// const bookEntries = Object.entries(books);

// const filteredBooks = bookEntries.filter(([id, { price }]) => {
//   return price >= 16;
// });

// filteredBooks.forEach(([id, {title, price}]) => {
//     console.log(`ID: ${id} Book: ${title} $${price}`);
// });



// const bookEntries = Object.entries(books);

// const filteredBooks = bookEntries.filter((entry) => {
//     const bookObj = entry[1];
//     return bookObj.price >= 16;
// });

// console.log(filteredBooks);

// filteredBooks.forEach((entry) => {
//     const id = entry[0];
//     const book = entry[1];

//     console.log(`Id: ${id} Book: $${book.price}`);
// });

// const bookEntries = Object.entries(books);

// const filteredBooks = bookEntries.filter((entry) => {
//   const bookObj = entry[1];
//   return bookObj.price >= 16;
// });

// console.log(filteredBooks);

// filteredBooks.forEach((entry) => {
//     const id = entry[0];
//     const book = entry[1];

//     console.log(`ID: ${id} Book: ${book.title} $${book.price}`);
// });

// const bookEntries = Object.entries(books);

// const filteredBooks = bookEntries.filter((entry) => {
//     const bookObj = entry[1];
//     return bookObj.price >= 16;
// });

// console.log(filteredBooks);

// const bookEntries = Object.entries(books);

// const filterdBooks = bookEntries.filter((entry) => {
//     const bookObj = entry[0];
//     return bookObj === 'b001'
// });

// console.log(filterdBooks)
