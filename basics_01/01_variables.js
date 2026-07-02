const accountId = 144553
let accountEmail = "nitin.com"
var accountPass = "12345"
accountCity = "patiala"
let accountState

/*
prefer not to use var because of issue in block and functional scope

*/
// accountId = 2 // not allowed cannot change the const

accountEmail = "garg.com"
accountPass = "21452"
accountCity = "nabha"

console.table([accountId,accountEmail,accountPass,accountCity,accountState])