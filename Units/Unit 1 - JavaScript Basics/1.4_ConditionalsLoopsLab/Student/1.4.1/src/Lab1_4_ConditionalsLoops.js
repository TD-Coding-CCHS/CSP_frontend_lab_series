/* 
 Lab 004 – Conditionals and Loops
*/
// const name = prompt("favorite fruit:");
// let fruit = "";

// switch (name) {
//   case "apple":
//     fruit = "red";
// break; // acts as a breakpoint, seperating other codes
//   case "orange":
//     fruit = "orange";
// break;
//   case "mango":
//     fruit = "like orange and green and red a bit so like 3 colors";
// break;
//   case "melon":
//   case "grape":
//   case "lime":
//     fruit = "GREEN"
// break;
//   default:
//     fruit = "non-existent because i didnt code that fruit";
// }
// console.log(`The color of your favorite fruit is ${fruit}.`);


// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i = i + 1; // same as i = i + 1
// }
// i = 0
// do {
//   console.log("hi im doing");
//   i = i + 1;
// } while (i < 100);

// let x = 15
// if (x > 10) {
//   console.log("Greater than 10");
// } else {
//   console.log("10 or less");
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// // i = 0;
// // while (i <= 30) {
// //   console.log(i);
// //   i = i + 1; // same as i = i + 1
// // }

// switch (i) {
//     case i = 10:
//      i = "ten";
//      break;
//     case i = 20:
//      i = "twenty"
// }

console.log("1.4 Lab")

// TODO 1: if..else with age discounts
console.log("||Anyone 16 and below get a 10% discount!||")
let discounted = ""
let age = 125

if (age <= 16) {
    discounted = "10%"
} else  if (age >= 65) {
    discounted = "20%"
} else {
    discounted = "0%"
}
console.log(`Your age discount is ${discounted} off!`)

// EX 2
let vbucks = 100;
let cart = 245;
let total;
let discount = 0

if (vbucks >= 5000) {
    total = cart * .8
    discount = 20
} else if (vbucks >= 2000) {
    total = cart * .9
    discount = 10
} else if (vbucks >= 1000) {
    total = cart * .95
    discount = 5
} else {
    total = cart
}
console.log(`Your total is: $${total}, with a ${discount}% discount`)

// TODO 2: Nested if with two numbers
let number1 = 10
let number2 = 20

if (typeof number1 == 'number' && typeof number2 == 'number') {
if (number1 === number2) {
    console.log("numbers are equal! Yay!!")
} else if (number1 > number2) {
    console.log("Number 1 is Bigger")
} else {
    console.log("Number 1 is smaller")
}
} else {
    console.log("these arent numbers, dimwit.")
}

// TODO 3: Switch statement for language greeting
let language = "french"

switch (language) {
    case language = "french":
        console.log("bonjour")
}

// let model = prompt("Enter model of car")

// switch (model) {
//     // Ford
//     case "Focus":
//     case "F150":
//     case "Mustang":
//         console.log(`Your ${model} is a Ford`)
//     break;
//     // Tesla
//     case "Model S":
//     case "Model 3":
//     case "Model X":
//     case "Model Y":
//         console.log(`Your ${model} is a Tesla`)
//     break;
//     // Porshe
//     case "911":
//     case "Carrera":
//     case "Tycan":
//     case "918":
//         console.log(`Your ${model} is a Porshe`)
//     break;
//     // Audi
//     case "A4":
//     case "R8":
//     case "S4 Cuatro":
//     case "S5":
//         console.log(`Your ${model} is an Audi`)
//     break;
//     default:
//         console.log("Hmm, I don't know this one. Sorry!")
// }


console.log("Car")
// TODO 4: While loop (1 to 10)
let count = 1
while(count <= 10) {
    console.log(`VALUE: ${count}`)
    count++;
}

let count2 = 10
while(count2 >= 1) {
    console.log(`VALUE: ${count2}`)
    count2--;
}

// TODO 5: Do..while loop (1 to 5)
let i = 1
do {
    console.log("VALUE:", i)
    i++
} while (i <= 5)

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for(let k = 1; k <= 20; k++) {
if (k == 10) {
    console.log("VALUE: TEN")
} else if (k == 20) {
    console.log("VALUE: TWENTY")
} else {
    console.log("VALUE:", k)
}
}

// TODO 7: Even/Odd loop (1 to 20)
for (let b = 1; b <= 20; b++) {
    if (b % 2 == 0) {
        console.log(b + " EVEN")
    } else {
        console.log(b + " ODD")
    }
}
// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
