//Conditionals
//used for make decision based on different condition
//script executes from top to bottom

//conditional execution: block of one or more statements will be executed if a certain expression is true

//repetitive execution: it will execute as long as that  expression true

//if, else, else-if, if else if else, switch and ternary operators

// let num = -3;

// if (num > 0) {
//   //truthy part
//   console.log(`this numbers is positive${num}`);
// } else {
//   //falsy part
//   console.log(`this number is negative ${num}`);
// }

//multiple if conditon

//else if

// let weather = "spring";

// if (weather === "rainy") {
//   console.log("bring your rain coat");
// } else if (weather === "sunny") {
//   console.log("welcome to summer");
// } else if (weather === "winter") {
//   console.log("bring your winter coat");
// } else {
//   console.log("it is spring season");
// }

//switch case

///alternative for if else
//syntax
// let weather = "cloudy";
// switch (weather) {
//   case "cloudy":
//     console.log("you need rain coat");
//     break;
//   case "sunny":
//     console.log("you need an AC");
//     break;
//   default:
//     console.log("enter your cloudy");
// }

//Ternary Operators

// let isRaining = false;

// isRaining
//   ? console.log("you need rain coat")
//   : console.log("no need of rain coat");

//exercise level 1

// let userAge = prompt("enter your age");

// let userAgeInt = parseInt(userAge);

// if (userAge > 18) {
//   console.log(`you are old enough to drive`);
// } else {
//   console.log(`you are left with ${18 - userAge} year's to drive`);
// }

// const myAge = 30;
// let userAge = prompt("enter your age");

// let userAgeInt = parseInt(userAge);

// if (userAge < myAge) {
//   console.log(`you are ${myAge - userAge} year's smaller than me`);
// } else if (userAge > myAge) {
//   console.log(`you are ${userAge - myAge} year's older than me`);
// } else {
//   console.log("we are on same age");
// }

// let a = 4;
// let b = 3;

// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} is less than ${b}`);
// }

// //using ternary operator
// a > b
//   ? console.log(`${a} is greater than ${b}`)
//   : console.log(`${a} is less than ${b}`);

// let num = prompt("Enter a number");
// let numInt = parseInt(num);

// if (num % 2 === 0) {
//   console.log(`${num} is an even number`);
// } else {
//   console.log(`${num} is an odd number`);
// }

// let result = prompt("enter the scores");

// let numResult = parseInt(result);

// switch (numResult) {
//   case 80 > 100:
//       if(numResult >=)
//     console.log("A");
//     break;
//   //   case numResult >= 70 && numResult <= 89:
//   //     console.log("B");
//   //     break;
//   //   case numResult >= 60 && numResult <= 69:
//   //     console.log("C");
//   //     break;
//   //   case numResult >= 50 && numResult <= 59:
//   //     console.log("D");
//   //     break;
//   //   case numResult >= 0 && numResult <= 49:
//   //     console.log("F");
//   //     break;
//   // }
// }

// let month = prompt("enter a month");

// let monthnum = new Date().getMonth();
// let yearnum = new Date().getFullYear();
// let daysInMonth = new Date(yearnum, 0, 0).getDate();

// console.log(daysInMonth);

// let enterValue = prompt("Enter a month");
// let valueToLc = enterValue.toLowerCase();
// let daysInMonth;

// switch (valueToLc) {
//   case "january":
//     daysInMonth = new Date(2022, 0 + 1, 0).getDate();
//     console.log(`January has ${daysInMonth} days`);
//     break;
//   case "february":
//     daysInMonth = new Date(2022, 1 + 1, 0).getDate();
//     console.log(`February has ${daysInMonth} days`);
//     break;
//   case "march":
//     daysInMonth = new Date(2022, 2 + 1, 0).getDate();
//     console.log(`March has ${daysInMonth} days`);
//     break;
//   case "april":
//     daysInMonth = new Date(2022, 3 + 1, 0).getDate();
//     console.log(`April has ${daysInMonth} days`);
//     break;
//   case "may":
//     daysInMonth = new Date(2022, 4 + 1, 0).getDate();
//     console.log(`May has ${daysInMonth} days`);
//     break;
//   default:
//     console.log("Another month");
// }

let enterValue = prompt("Enter a month");
let valueToLc = enterValue.toLowerCase();
let daysInMonth;
let year;
let hello;

let compareTheGit;

//leap year..
// if (year / 400 || year / 4) {

// }

switch (valueToLc) {
  case "january":
    daysInMonth = new Date(2024, 0 + 1, 0).getDate();
    console.log(`January has ${daysInMonth} days`);
    break;
  case "february":
    daysInMonth = new Date(2024, 1 + 1, 0).getDate();
    console.log(`February has ${daysInMonth} days`);
    break;
  case "march":
    daysInMonth = new Date(2024, 2 + 1, 0).getDate();
    console.log(`March has ${daysInMonth} days`);
    break;
  case "april":
    daysInMonth = new Date(2024, 3 + 1, 0).getDate();
    console.log(`April has ${daysInMonth} days`);
    break;
  case "may":
    daysInMonth = new Date(2024, 4 + 1, 0).getDate();
    console.log(`May has ${daysInMonth} days`);
    break;
  default:
    console.log("Another month");
}
