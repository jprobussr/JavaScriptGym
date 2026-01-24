// const logArgs = (first, ...rest) => {
//     console.log('first:', first);
//     console.log('rest:', rest);
// };

// logArgs(10, 20, 30, 40);

// const logAll = (...items) => {
//   console.log(items);
// };

// logAll(1, 3, 3);
// logAll('a', 'b');
// logAll(true, 43, 'hello');

// const sum = (...numbers) => {
//   console.log(numbers);
// };

// sum(2, 4, 6);
// sum(10, 20);

// const sum = (...number) => {
//     let total = 0;

//     number.forEach((num) => {
//         total += num
//     });
//     return total;
// };

// console.log(sum(11, 11, 11, 11));

// const scores = [98, 87, 92, 76];
// const [first, ...others] = scores;

// console.log(first);
// console.log(others);

// const user = {
//   id: 1,
//   name: 'John',
//   email: 'john@email.com',
//   role: 'admin',
// };

// const { id, ...publicInfo } = user;

// console.log(publicInfo);

// Spread

// const original = [1, 2, 3];
// const copy = [...original];
// const extended = [...original, 4, 5];

// console.log(extended);

// const user = {
//   name: 'John',
//   role: 'admin',
// };

// const copy = { ...user };

// //console.log(copy);

// const updatedUser = {
//   ...user,
//   role: 'editor',
// };

// console.log(updatedUser);

// const add = (a, b, c) => {
//     return a + b + c;
// };

// const values = [1, 2, 3];

// console.log(add(...values));

// const trackEvent = (eventName, ...details) => {
//     console.log('Event:', eventName);
//     console.log('Details:', details);
// }

// trackEvent('page_view', '/home', 'mobile');

// const classNames = (...classes) => {
//     return classes.join(' ');
// };

// console.log(classNames('btn', 'btn-primary', 'active'));

// const logField = (label, ...values) => {
//     console.log('Label:', label);
//     console.log('Values', values);
// };

// logField('Email');
// logField('Age', 40);
// logField('Tags', 'admin', 'editor', 'owner');

// const validate = (value, ...rules) => {
//     console.log('Value:', value);
//     console.log('Number of rules:', rules.length);
// };

// // validate("test@email.com");
// // validate("test@email.com", "required");
// validate("test@email.com", "required", "minLength", "emailFormat");

