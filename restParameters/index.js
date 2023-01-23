// rest parameters = represents an indefinite number
// ...               of parameters
//                   (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e, 5));

function sum(x, y, ...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    return total;
}

/*
function sum2(a, b) {
    return a + b;
}

function sum3(a, b, c) {
    return a + b;
}

function sum4(a, b, c, d) {
    return a + b;
}
*/
