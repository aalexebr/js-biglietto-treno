const userKm = prompt("insert km");
const userAge = prompt ("insert age");

const km = parseInt(userKm)
const age = parseInt(userAge)

let totPrice = km * 0.1


if (age <= 18) {
    totPrice = totPrice - (totPrice * 0.2)
}
if (age >= 65) {
    totPrice = totPrice - (totPrice * 0.4)
}

document.getElementById('total').innerHTML += "" + totPrice + "£"

console.log('price', totPrice)