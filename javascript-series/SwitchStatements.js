const number = parseInt(prompt('Enter a number betwen 1 and 7 :'));
switch(number){
  case 1:
    console.log('sunday')
    break;
 case 2:
    console.log('monday')
    break;
 case 3:
    console.log('tuesday')
    break;
 case 4:
    console.log('wednesday')
    break;
 case 5:
    console.log('thursday')
    break;
 case 6:
    console.log('friday')
    break;
 case 7:
    console.log('saturday')
    break;
 default:
    console.log('invalid number')
}


const day = prompt('Enter day :')

switch( day){
case 'monday':
case 'tuesday':
case 'wednesday':
case 'Thursday':
case 'friday':
    console.log('week day')
    break;
case 'saturday':
case 'sunday':
   console.log('weekend')
   break;
default:
    console.log('invalid day')
}

const operator = prompt('enter operator(either +, -, *, or /):')
const num1 = parseFloat(prompt('enter first number?:'));
const num2 = parseFloat(prompt('enter second number?:)'))

let result;
switch(operator){
  case '+':
     result = num1 + num1 ;
     break;
  case '-':
     result = num1 - num2
     break
  case '*':
     result = num1 * num2
     break
  case '/':
     result = num1 / num2
     break
   default:
     console.log('invalid operator')

}
console.log(`${num1} ${operator}${num2}=${result}`)
