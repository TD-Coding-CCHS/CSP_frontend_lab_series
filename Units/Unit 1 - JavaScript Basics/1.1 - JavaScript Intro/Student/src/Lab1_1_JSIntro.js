/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Tyler");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood
favoriteFood = "steak";
console.log("My favorite food is", favoriteFood);
favoriteFood = "pizza";
console.log("nevermind, now my favorite food is", favoriteFood);
// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery;

mystery = "sdiybt";
console.log("mystery string:", mystery, "||", "print type:", typeof mystery)

mystery = 67;
console.log("mystery number:", mystery, "||", "print type:", typeof mystery)

// TODO 4: Declare const schoolName, try to reassign


// TODO 5: Create three valid camelCase variables and print them


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
const schoolName = "Christopher Columbus High School"
console.log("I attend", schoolName, "with my bestest friend in the whole wide Godverse, Mikey")
// schoolName = "Leewood K-8" // not possible, gives error

// TODO 5: Create three valid camelCase variables and print them
let sixSeven = "so tuff"
let tungSahur = "big T"
let anaTyler = "awesome"

console.log("67 is", sixSeven);
console.log("thats my goat,", tungSahur + "!")
console.log("my gf is", anaTyler)

// STRETCH GOAL
let age = 21;
console.log("I am " + age + " years old") // Concatenation
console.log(`I am ${age} years old, but cooler`) // Temperate Literals - $ symbol, {} brackets, and variable name inside brackets

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
      camelCase variables, and that numbers cant start variable names
   2. How did you apply logic or conditionals in your code?
      (SKIP)
   3. What challenges did you encounter, and how did you solve them?

   4. Where else could this programming concept be useful?
   =========================================================== */
