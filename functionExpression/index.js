// function expression = function without a name(anonymous function)
//                       avoid polluting the global scrope with names
//                       Write it, then forget about it

let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}


/*
sayMyName();

function sayMyName() {
    console.log("Say my name, say my name")
}

const saymyname = function(){
    console.log("Say my name, say my name")
}

saymyname();
*/
