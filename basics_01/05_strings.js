const name = "Nitin"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ngarg-20-com')

console.log(name[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('t'));

const newstring =gameName.substring(0,3) // cannot give neg value if given will start from 0
console.log(newstring);

const anotherstring = gameName.slice(0,4)
console.log(anotherstring);

const newstringone = "   Nitin   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://nitin/20.com"
console.log(url.replace("20", "-"))

console.log(url.includes("nitin"));

console.log(gameName.split("-"))


