// Function hoisting
sayMyName("Anas");

function sayMyName(finalName) {
    console.log(finalName);
}

// Variable hoisting using var keyword
console.log(age);

var age = 25;

// Class Hoisting
const obj1 = new Human();
class Human {

}
