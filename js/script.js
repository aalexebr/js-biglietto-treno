const userKm = prompt("insert km");
const userAge = prompt ("insert age");

const km = parseInt(userKm)
const age = parseInt(userAge)

let totPrice = km * 0.21

console.log('price', totPrice)

document.getElementById('total').innerHTML = totPrice

