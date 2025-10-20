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
schoolName = "Leewood K-8" // not possible, gives error



/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
      I learned that I could define a variable with let, and *then* give it a value. Unlike before when I would define it and give it a value.
   2. How did you apply logic or conditionals in your code?
      (SKIP)
   3. What challenges did you encounter, and how did you solve them?
      One problem I had was in line 21, where I accidentally define mystery with quotations, which made it a string, when I needed it to be a number.
   4. Where else could this programming concept be useful?
      This are the basics of JavaScript coding, so quite literally anywhere that JavaScript is needed, these concepts must be known and used.
   =========================================================== */
