console.log('js');

// var priceChocolate = 4.25;
// var quantity = 4;
//
// var total = priceChocolate * quantity;
//
// document.getElementById("quantity").innerHTML += ' ' + quantity;
// // += will place the value next to the id instead of replacing it.
// document.getElementById("total").innerHTML += total;


document.getElementById('submit').addEventListener('click',function(){
  // alert("hello!");
  var cost = 4.35;
  var quantity = document.getElementById('quantityInput').value;
  console.log(quantity);
  var total = cost * quantity;
  console.log(total);
  var result = document.getElementById('result');
  result.innerHTML = "total cost of " + quantity + " chocolate is $" + total.toFixed(2);
  var totalWithGST = total * 1.15;
  result.innerHTML += "<br>" + "total cost with GST is $ " + totalWithGST.toFixed(2);
  console.log(totalWithGST);
});

// Exercise 05-02
document.getElementById('calculate').addEventListener('click',function(){
  // alert("hello!");
  var totalCost = 3.80;
  var quantity = 13;
  console.log(totalCost, quantity);
  var cost = totalCost / quantity;
  console.log(cost);
  var muffins = document.getElementById('muffins');
  //toFixed() gives the required number of decimal places.
  muffins.innerHTML = "Unit cost of " + quantity + " muffins are $" + cost.toFixed(2);
});

// exercise 05-04
var bagel = document.getElementById('bagel');
var totalAmount = 100;
var cost = 4.35;
// var numberOfBagels = Math.floor(totalAmount / cost); //Math.floor() gets the interger part of the answer.
var numberOfBagels = parseInt(totalAmount / cost); //paresInt () converts float into interger.
bagel.innerHTML += '<div class="jumbotron bg-primary text-light">' + 'Number of bagels at the cost of $4.35 for $100 is ' + numberOfBagels + ' </div>';
