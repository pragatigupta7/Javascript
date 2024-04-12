const prompt =require('prompt-sync')();

var a= prompt("Enter the value of a:");
var  b=prompt("Enter the value of b:")
console.log(`The value of a ${a},The value of b is ${b}`);
var temp;
temp =a;
a=b;
b=temp;
console.log(`After Swap The value of a is ${a}, The value of b is ${b}`);