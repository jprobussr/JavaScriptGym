




















// class Wallet {
//     constructor() {
//         this.balance = 0;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         this.balance -= amount;
//     }
// }

// const wallet = new Wallet();
// wallet.deposit(44);
// wallet.withdraw(44);
// console.log(`Your new balance is ${wallet.balance}`);



// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     logName(){
//         console.log('Shape Name: ' + this.name);
//     }
// }


// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name);
//         this.height = height;
//         this.width = width;
//     }
// }

// class Circle extends Shape {
//     constructor(name, radius) {
//         super(name);
//         this.radius = radius;
//     }
// }


// const rect = new Rectangle('Rect 1', 20, 20);
// console.log(rect);
// rect.logName();

// const cir = new Circle('Cir 1', 30);
// cir.logName();



// class Rectangle {
//     constructor(name, width, height) {
//         this.name = name;
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.height * this.width;
//     }

//     perimeter() {
//         return 2 * (this.width + this.height);
//     }

//     isSquare() {
//         return this.width === this.height;
//     }

//     logSquare() {
//         console.log('Rectangle Area: ' + this.area() + ' Name: ' + this.name);
//     }
// }

// const square = new Rectangle('Yard', 20, 20);

// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());
// console.log(square.name);
// square.logSquare();