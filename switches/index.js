// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient that many "else if" statements

let grade = "A";
let numGrade = 95;

/*
if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!");
}
else if(grade == "C"){
    console.log("You did okay!");
}
else if(grade == "D"){
    console.log("You passed... barely!");
}
else if(grade == "F"){
    console.log("You FAILED!");
}
else{
    console.log(grade, "is not a letter grade!")
}
*/

/*
switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed... barely!");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!")
}
*/

switch(true){
    case numGrade >= 90:
        console.log("You did great!");
        break;
    case numGrade >= 80:
        console.log("You did good!");
        break;
    case numGrade >= 70:
        console.log("You did okay!");
        break;
    case numGrade >= 60:
        console.log("You passed... barely!");
        break;
    case numGrade < 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(numGrade, "is not a number grade!")
}
