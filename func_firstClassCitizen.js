// 1. Assigning function to the variable
let greet = function() {
    console.log("Greeting for the day");
}
greet();

// 2. Passing function as an argument
function greetMe(greet, fullName) {
    console.log("Hello, ", fullName);
    greet();
}
function greet() {
    console.log("Greeting for the day");
}
greetMe(greet, "Anas");

// 3.Funtion returing
function solve() {
    return function(number) {
        return number*number;
    }
}
let ans = solve();
let finalAns = ans(5);
console.log(finalAns);

// 4. Storing funtion in DataStructure (i-e: Arrays)
const arr = [
    function(a,b) {
        return a+b;
    },
    function(a,b) {
        return a-b;
    },
    function(a,b) {
        return a*b;
    }
];
let first = arr[2];
let ans2 = first(10,5);
console.log(ans2);

// We can also use it in Objects
let obj = {
    age: 25,
    wt: 56,
    height: 180,
    greet: ()=>{
        console.log("Hello Jee");
    }
}
console.log(obj.age);
obj.greet();


