var priceChocolate = 4.25;
var quantity = 4;

var total = priceChocolate * quantity;

document.getElementById("quantity").innerHTML += ' ' + quantity;
// += will place the value next to the id instead of replacing it.
document.getElementById("total").innerHTML += total;
