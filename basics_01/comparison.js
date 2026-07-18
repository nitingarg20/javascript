console.log(2>1);
// others same like this are >= <= < == !=

// console.log("2" > 1);
// console.log("02" > 1);

// treats as NaN or 0 in different cases
console.log(null > 0);
console.log(null == 0); // return false treats equality check differently from comparison
console.log(null >= 0); // will return true as it treats as 0 in case of comparison

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
console.log("2" === 2); // will strictly check like will not convert "2" into a number it will check dataType too