const prompt =require('prompt-sync')();
var base = prompt("Enter the value of Base:","");
var height = prompt("Enter the value of height of Triangle:","") ;
 
var area = (base*height)/2;
console.log("The area of triangle is:"+area);


console.log("By Herons' formula Area of a triangle");
//gerneral formula s=(a+b+c)/2
//s=sqrt(s(s-a)*(s-b)*(s-c))

var a=10;
var b=20;
var c=15;
 
var s=(a+b+c)/2;

var temp=s*(s-a)*(s-b)*(s-c);
var area=Math.sqrt(temp);
console.log("Area of a triangle is:"+area)
