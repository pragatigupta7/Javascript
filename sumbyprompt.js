const prompt =require('prompt-sync')();

let a = prompt("Please enter a value of a ","");
let  b = prompt("Please enter a value of b ","");
var c = parseInt(a)+parseInt(b);
console.log(" The sum of "+a+" and "+b+" is:" +c);