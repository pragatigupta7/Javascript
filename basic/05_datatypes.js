// #primitive 
//7 types : String ,Symbol(unique),Number,Null,Boolean,Bigint(large value),Undefined



//Refernce type(non primitive)

//Array,objects,function
const heros=["shakitman","naagraj","doga"]
let myobj={
    name:"pragti",
    lastname:"gupta",
    age:21,
}

const myfunction = function (){
    console.log("hello world");
}

/****************************************************** */

//stack(primitive),heap(nonprimitive)

let myyt="hitishchaudhary"
let anothername=myyt
anothername="mrpragati"
console.log(myyt)
console.log(anothername)


//heap  = reference milta jo bhi changes hoga original value me hi hota hai
let user={
    email:"abc@gmail",
    upiid:"1234@axl"
}
let usertwo=user
usertwo.email="xyz@gmail.com"
console.log(user);
console.log(usertwo)