let count = 0;

document.getElementById("decreaseBTN").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBTN").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBTN").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
