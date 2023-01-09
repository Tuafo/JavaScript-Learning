
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBTN = document.getElementById("visaBTN");
    const mastercardBTN = document.getElementById("mastercardBTN");
    const paypalBTN = document.getElementById("paypalBTN");


    if(myCheckBox.checked){
        console.log("You are subscribed!")
    }
    else{
        console.log("You are NOT subscribed!")
    }

    if(visaBTN.checked){
        console.log("You are paying with Visa!")
    }
    else if(mastercardBTN.checked){
        console.log("You are paying with Mastercard!")
    }
    else if(paypalBTN.checked){
        console.log("You are paying with PayPal!")
    }
    else{
        console.log("You must select a payment type!")
    }
}
