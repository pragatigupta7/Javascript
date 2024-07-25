const accountId = 1445553
let accountemail = "pragatigupta@gmail.com"
var accoundpassword = "12345"
accountCity = "jaipur"

//accountId = 2 //not allowed
accountemail = "abc@gmail.com"
accoundpassword = "234567"
accountCity= "bengaluru"

console.log(accountId);
/* prefer not to use var because of issue in block scope and functional scope  */
console.table([accountId,accountemail,accoundpassword,accountCity
])