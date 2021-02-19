// the object in the const could be singular but than the console.log would look more like this if it was const math = require("") than it would be console.log(math.sum(1,2))
const {sum , sub, mul, div} = require("./math.js")

console.log(sum(2 , 5))
console.log(sub(10 , 5))
console.log(mul(2 , 8))
console.log(div(100 , 25))



// const result = math(2, 5)
// console.log(result)