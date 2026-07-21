//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction); // prints function value stored in myFunction
myFunction(); // print whatever is inside the function

console.log(typeof anotherId);

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// two types of memory -> stack (primitive -> we get the copy in which changes are done) and heap (Non-primitive -> changes are done in the original one)

let myinsta = "garg_nitin20"
let anotherinsta = myinsta
anotherinsta = "ngarg20"

console.log(anotherinsta);
console.log(myinsta);

let userone = {
    email : "ngarg20.com",
    name : "nitin"
}
let userTwo = userone;
userTwo.email = "ngarg0668.com"
console.log(userTwo);
console.log(userone.email)


