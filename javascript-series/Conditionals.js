const score = parseInt(prompt('Enter your test score :'))

if (score >100){
    console.log('invalid number')
}

else if (score < 0){
 console.log('invalid number')
}


else if (score >= 50){
 console.log('you have passed')
 console.log('congratulations')
}
else{
    console.log('sorry you have failed')
}


const number = parseInt(prompt('Enter a number :'))
        
        if (number < 0 || number > 0 ){
                console.log('number negative or less than zero')

              }
         else{
                console.log('the number is zero')
              }