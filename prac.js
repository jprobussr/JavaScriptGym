// ## Spread Operator

// const fruit = ['apple', 'banana', 'grapes', 'pineapple'];
// const addFruit = ['mandarin oranges', ...fruit, 'tomato', 'pears'];

// console.log(addFruit.join(', '));

// const original = [1, 33, 44, 55, 66];
// const copy = [...original];

// copy.push(444);
// console.log('Original', original);
// console.log('Copy', copy);

// const numbers = [5, 6, 8, 9, 10];
// console.log(Math.max(...numbers));

// const user = { name: 'John', age: 45};
// const updatedUser = {...user, age: 31};
// console.log(updatedUser);

// const user = { name: 'Ghost', age: 101, id: Math.random()}
// console.log(user);

// const updatedUser = {...user, id: Math.floor(Math.random() * 8)};
// console.log(updatedUser)

// const settings = { darkMode: true };
// const overRides = { darkMode: false, fontSize: '5rem' };

// const finalSettings = { ...settings, ...overRides };
// console.log(finalSettings);

// const greet = (first, second, third) => {
//     console.log(`Hello ${first}, ${second}, and ${third}.`);
// }

// const names = ['Chapman', 'Tebo', 'Charlie'];
// greet(...names);

// const users = [
//     {id: 1, name: 'Zoey'},
//     {id: 11, name: 'Jackson'}
// ];

// const updatedUsers = users.map((user) => {
//     return user.id === 1 ? {...user, name: 'Robert'} : user 
// });

// console.log(updatedUsers)

const products = [
  { id: 1, name: "Hoodie" },
  { id: 2, name: "T-Shirt" },
  { id: 3, name: "Cap" }
];

const filtered = products.filter(product => product.id !== 2);

console.log(filtered)