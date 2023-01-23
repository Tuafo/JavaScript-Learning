// 2D array = An array of arrays

//               column 0   column 1    column 2
let fruits =     ["apples", "oranges", "bananas"]; // row 0
let vegetables = ["carrots", "onions", "potatos"]; // row 1
let meats =      ["eggs", "chicken", "fish"];      // row 2

let groceryList = [fruits, vegetables, meats];
groceryList[0][0] = "mangoes";
groceryList[2][0] = "steak";

for(let list of groceryList) {
    for(let food of list) {
        console.log(food);
    }
}
