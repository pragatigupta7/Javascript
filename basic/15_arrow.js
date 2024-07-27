const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // this is used for the current context term access
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);
//browser ke andar this jb run hota hai tb windows aur termimal pr emptyaata hai
function chai(){
   let username = "hitesh"
    console.log(this.username);
 }

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()

const addTwo = (num1, num2) => {
     return num1 + num2
 }

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


 const myArray = [2, 5, 3, 7, 8]
 myArray.forEach()



 // Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')