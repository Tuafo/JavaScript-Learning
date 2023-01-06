// A variable is a container for storing data
// A varibale behaves as if it was the value that is contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// let age;
let age = 21; // numbers
let firstName = "Thiago"; // strings
let student = true; // booleans

// age = 21;

age = age + 1;

// showing the results in the console

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

// taking the id of the <p></p> in the HTML file index.html and placing result in the same

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrlloed: " + student;
