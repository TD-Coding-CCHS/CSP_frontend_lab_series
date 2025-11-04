/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34
let price = 12.99
console.log(age, "and", price)

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let name = "Sandra" / 2
console.log("Sandra Division:", name)

// TODO 2: Print basic math ops: + - * /
console.log("addition:", 6 + 7)
console.log("subtractiob:", 6 - 7)
console.log("multiplication:", 6 * 7)
console.log("division:", 6 / 7)

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log("expontaion:", 6 ** 7)
console.log("modulo", 7 % 6)

// TODO 3: Assignment operators with score variable
let score = 67
console.log("none:", score)
score += 2;
console.log("plus:", score)
score -= 28;
console.log("sub:", score)
score /= 1.95238095238
console.log("divis:", score - 0.000000000010242)
score *= 2.90476190476
console.log("multi:", score + 0.000000000010246)

let score2 = 20
console.log("(real) none:", score2)
score2 += 2;
console.log("(real) plus:", score2)
score2 -= 10;
console.log("(real) sub:", score2)
score2 /= 2
console.log("(real) divis:", score2)
score2 *= 9
console.log("(real) :", score2)

// TODO 4: Expressions with operator precedence
console.log("|| OPERATOR PRECEDENCE START ||")
console.log(2 + 2)
console.log(4 - 3)
console.log(3 * 3)
console.log(20 / 5)
console.log(20 - (12 * 67))
console.log(90 / (9 * 5))   
console.log("|| OPERATOR PRECEDENCE END ||")
// TODO 5: Strings (single, double, backticks)
let single = "this"
let double = 'that'
console.log(`${single} and ${double} makes me wanna pat #bars`)

// TODO 6: String properties and methods
let ss = "six seven is the best and the coolest"
console.log(ss.length)

console.log(ss.charAt(0))
console.log(ss.charAt(5))
console.log(ss.charAt(9))

console.log(ss[0])
console.log(ss[5])
console.log(ss[9])
console.log(ss[-2])

console.log(ss.indexOf("six"))
console.log(ss.indexOf("v"))
console.log(ss.indexOf("The")) // <-- not defined | -1
console.log(ss.indexOf("st"))
console.log(ss.indexOf("the"))
console.log(ss.indexOf("the", 20))
console.log(ss.lastIndexOf("the"))

console.log("6 7 ".repeat(41))
console.log("la".repeat(10000))

const forthisthing = ss.substring(7,28);
console.log(ss.substring(7,28))

const forthisthing2 = ss.substr(7,28); // ask about this
console.log(ss.substr(7,28))

const forthisthing3 = ss.slice(7,28);
console.log(ss.slice(7,28))


ss += " is so tuff"
// ss + " is so tuff" <-- would be incorrect; error case
console.log(ss)
ss += " AND sigma"
console.log(ss)

// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples

// TODO 5: Strings (single, double, backticks)

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example