const person = {
    name:'Hamza',
    age:20,
    marks:90,
  greet:function greet(){
    console.log('hello')
}
}
console.log(person)
console.log(typeof(person))


//  accessing elements of objects
console.log(person.name, person.marks)
console.log(person['name'])

person.age = 35;
console.log(person.age)
console.log(person.greet())