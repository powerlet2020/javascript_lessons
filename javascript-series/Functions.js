function greet(name){
    console.log('Good morning ' +  name)
}
greet('Hamza')


function addnumbers(num1, num2){
    results = num1 + num2;
    return results;
}
let number_1 = parseFloat(prompt('Enter number 1:'))
let number_2 = parseFloat(prompt('Enter number 2:'))

 let output = addnumbers(number_1, number_2)
 let output1 = addnumbers(42, 43)

 console.log("the sum is ",output)
 console.log('The second sum is',output1)

 let num = 9;

 let squareroot = Math.sqrt(num);
 console.log(`The square root of ${num} is ${squareroot}`)

//   JAVASCRPT ARRROW FUNCTION  JAVASCRIPT ARROW FUNCTION

const greet = () => console.log('good morning')
greet()

const greet1 = () =>{
    console.log('good morning')
    console.log('good afternoon')
}
greet1()


const addnumbers = (a, b) => {
    results = a + b;
    return results;
   }
output2 = addnumbers(5, 5)
console.log(output2)