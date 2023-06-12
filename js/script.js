const userKm = prompt("insert km");
const userAge = prompt ("insert age");

const km = parseInt(userKm)
const age = parseInt(userAge)

let totPrice = km * 0.21

if (age < 18) {
    totPrice = totPrice - (totPrice * 0.2)
}
if (age >= 65) {
    totPrice = totPrice - (totPrice * 0.4)
}

let totPriceTwoDecimals = totPrice.toFixed(2)
console.log('price', totPrice, "price with 2 decimals" , totPriceTwoDecimals)
document.getElementById('total').innerHTML += "" + totPriceTwoDecimals + "£"

if (isNaN(userAge || userKm)){
    alert ("retard")
    document.getElementById('total').innerHTML = "retard"
}