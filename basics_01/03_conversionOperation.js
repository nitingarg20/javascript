let score = false

console.log(typeof(score))
console.log(typeof score)

let ValueInNumber = Number(score)

console.log(typeof ValueInNumber);
console.log(ValueInNumber);


// when converting into a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN


let IsLoggedIn = "";

console.log(typeof IsLoggedIn);

let BooleanLoggedIn = Boolean(IsLoggedIn);

console.log(typeof BooleanLoggedIn);
console.log(BooleanLoggedIn);

// when converting into a boolean

// 1 => true; 0 => false
// "" => false
// "Nitin" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// operations // 

let value = 3
let negValue = -value

console.log(negValue);

console.log(2**3); // makes it 2 to the power 3 
// we can have all other operations as well like + - / * % 

let str1 = "hello"
let str2 = " Nitin"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 1); // 121
console.log(2 + 1 + "2"); // 32

let num1, num2, nums3
num1 = nums2 = nums3 = 20 + 2

let counter = 3
++counter
console.log(counter);
