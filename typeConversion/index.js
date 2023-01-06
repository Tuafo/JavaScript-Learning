// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// a prompt returns a string

// let age = window.prompt("How old are you?");

// so is not possible make a + with this value, because will concatenate

// age += 1;
/*
let age = window.prompt("How old are you?");
console.log(typeof age) // string
age = Number(age); // converting from string to number
console.log(typeof age) // number

age += 1;

console.log("Happy Birthday! You are", age, "years old")
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza"); // if is empthy returns false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
