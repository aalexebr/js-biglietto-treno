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


//  table

function calc()
         {
           let number1, number2, priceTable, priceTable2;
           number1 = parseInt(document.getElementById("firstnumber").value);
           number2 = parseInt(document.getElementById("secondnumber").value);
           priceTable = number1 * 0.21;
           if (number2 < 18) {
            priceTable = priceTable - (priceTable * 0.2)
            }
            if (number2 >= 65) {
                priceTable = priceTable - (priceTable * 0.4)
            }
           priceTable2 = priceTable.toFixed(2)
           document.getElementById('answer').innerHTML = priceTable2 + "$"
           if (isNaN(priceTable2)){
           
            document.getElementById('answer').innerHTML = "retard*2"
        }
         }