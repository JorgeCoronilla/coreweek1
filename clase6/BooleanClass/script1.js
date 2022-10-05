var n1 = prompt("Dame el numero 1");
var n2 = prompt("Dame el numero 2");
var n3 = prompt("Dame el numero 3");
var n4 = prompt("Dame el numero 4");
var n5 = prompt("Dame el numero 5");
var n6 = prompt("Dame el numero 6");

var comparacion1 = new Boolean(n1 > n3);
var comparacion2 = new Boolean(n2 < n4);
var comparacion3 = new Boolean(n5 = n6);

console.log("1 " + comparacion1);
console.log("2 " + comparacion2);
console.log("3 " + comparacion3);

var nAND = new Boolean(comparacion1 && comparacion2 && comparacion3);
var nOR = new Boolean(comparacion1 || comparacion2 || comparacion3);

console.log(nAND);
console.log(nOR);