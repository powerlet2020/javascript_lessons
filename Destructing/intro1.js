// Destructuring in JavaScript: is a convenient way of extracting values from arrays or properties from objects and assigning them to variables.
// It allows you to unpack values or properties into distinct variables with a concise syntax.

// array destructuring
const [a, b] = [1, 2];

console.log(a);
console.log(b);

const numbers = [10, 20, 30];
const [x, y, z] = numbers;
console.log(x, y, z);

// skipping elements
const colors = ["red", "blue", "green"];
const [, , lastColor] = colors;
console.log(lastColor);

// swapping values
let g = 5,
  h = 10;
[g, h] = [h, g];
console.log(g);
console.log(h);

// Nested Array destructuring
const nestedArray = [30, [40, 50]];
const [one, [two, three]] = nestedArray;
console.log(one, two, three);

//  object destructing
const { name1, age } = { name1: "Hamza", age: 30 };
console.log(name1);
console.log(age);

// Renaming Variables
const user = { username: "power", useremail: "powerlet@mail.com" };
const { username: userName, useremail: userEmail } = user;
console.log(userName, userEmail);

// default values in objects
const settings = { theme: "dark" };
const { theme, laguage = "English" } = settings;
console.log(settings);
console.log(theme, laguage);

// destructuring in function parameter

const greet = ({ name, greeting = "hello" }) => {
  console.log(`${greeting} ${name}`);
};
console.log(greet({ name: "hamza" }));
