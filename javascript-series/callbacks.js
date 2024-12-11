function greet() {
  setTimeout(function () {
    console.log(`Hello`);
  }, 3000);
}

function goodBye() {
  console.log("Bye");
}
console.log(greet());
console.log(goodBye());

//    better way using a call back
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function goodBye() {
  console.log("GoodBye");
}

console.log(greet("Hamza", goodBye));

//  add story
const addNumber = (a, b, c, callback) => {
  console.log("calculating ...");
  return callback(a, b, c);
};

const calculate = (a, b, c) => {
  let result = a + b + c;
  return result;
};
console.log(addNumber(5, 5, 5, calculate));

// You could call a calculator function (myCalculator), save the result,
//  and then call another function (myDisplayer) to display the result:
function display(some) {
  document.querySelector(".display").innerHTML = some;
}

function calculate(a, b) {
  let result = a + b;
  return result;
}
let coutcome = calculate(5, 5);
display(coutcome);
