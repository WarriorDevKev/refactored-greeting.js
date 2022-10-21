/* Instructions - https://www.codewars.com/kata/refactored-greeting/train/javascript

 **************** DEFAULT CODE ****************           */
// function greet(myName, yourName){
//     return "Hello " + yourName + ", my name is " + myName;
//   }

// ES5 Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(targetName) {
    return `Hello ${targetName}, my name is ${this.name}`;
}

// **************** ES6 Class (1st attempt)
class Person {
    constructor(myName, yourName) {
        this.myName = myName;
        this.yourName = yourName;
    }
    greet() {
        return `Hello ${this.yourName}, my name is ${this.myName}`
    }
}

let kate = new Person("Kate", "Joe");
let joe = new Person("Joe", "Kate");

console.log(kate.greet())

// **************** ES6 Class Refactored (2nd attempt)
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(targetName) {
        return `Hello ${targetName}, my name is ${this.name}`
    }
}

let adeyemi = new Person("Adeyemi");
console.log(adeyemi.greet("Olu"));

