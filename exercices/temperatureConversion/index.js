document.getElementById("submitButton").onclick = function(){

    let temp;
    if(document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C"; // press alt + 0176 to get the circle symbol
    } 
    else if(document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F"; // press alt + 0176 to get the celsius symbol
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
