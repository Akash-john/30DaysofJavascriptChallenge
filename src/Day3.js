//Booleans
//it returns true or false for comparision

// let isLightOn = true;
// let isRaining = false;
let gitHub = true;

let helww = false;
// let isHungry = false;
// let isMarried = true;
// let truValue = 4 > 3
// let falseValue = 4 < 5;

//Truthy values

//All numbers(+,-) are truthy expect 0
//All strings are truthy expect an empty string('')
//The boolean true

//Falsy values
//0 ,On,null, undefined, Nan ,the boolean False,'',"",``,empty string

//Undefined
//declare variable -don't assign any values to it
//function isn't returning the value.
// let firstName;
// console.log(firstName);

// //null - no Value
// let empty = null;
// console.log(typeof empty);

//Operators
//Assignment Operators
//equal  sign is an assignment operator used to assign a variable
//x=y,x+=y = x = x+y
// let firstName = "Akash";

// let numOne = 4;
// let numTwo = 3;
// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let mult = numOne * numTwo;
// let div = numOne / numTwo;
// let remainder = numOne % numTwo;
// let powerof = numOne ** numTwo;

// console.log(sum, diff, mult, div, remainder, powerof);

// //Comparision Operators
// console.log(3 > 2); // true, because 3 is greater than 2
// console.log(3 >= 2); // true, because 3 is greater than 2
// console.log(3 < 2); // false,  because 3 is greater than 2
// console.log(2 < 3); // true, because 2 is less than 3
// console.log(2 <= 3); // true, because 2 is less than 3
// console.log(3 == 2); // false, because 3 is not equal to 2
// console.log(3 != 2); // true, because 3 is not equal to 2
// console.log(3 == "3"); // true, compare only value
// console.log(3 === "3"); // false, compare both value and data type
// console.log(3 !== "3"); // true, compare both value and data type
// console.log(3 != 3); // false, compare only value
// console.log(3 !== 3); // false, compare both value and data type
// console.log(0 == false); // true, equivalent
// console.log(0 === false); // false, not exactly the same
// console.log(0 == ""); // true, equivalent
// console.log(0 == " "); // true, equivalent
// console.log(0 === ""); // false, not exactly the same
// console.log(1 == true); // true, equivalent
// console.log(1 === true); // false, not exactly the same
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(NaN == NaN); // false, not equal
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // number

// console.log("mango".length == "avocado".length); // false
// console.log("mango".length != "avocado".length); // true
// console.log("mango".length < "avocado".length); // true
// console.log("milk".length == "meat".length); // true
// console.log("milk".length != "meat".length); // false
// console.log("tomato".length == "potato".length); // true
// console.log("python".length > "dragon".length); // false

//logical operators
// && ampersand operator example

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

// //! Negation examples

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

//Increment operator
//used to increase value to stored in a variable
//pre increment

// let count = 0;
// console.log(++count);

//post increment

// let count1 = 0;
// console.log(count1++);
// console.log(count1);

//Decrement Operator
//decrement operator to decrease a value stored in a variable.
//pre-decrement
// let count = 0;
// console.log(--count);

//post-decrement
// let countt = 0;
// console.log(countt--);
// console.log(countt);

//Ternary Operators
//Allows to write a condition
//another way to write condition

// let isRaining = true;
// let result = isRaining
//   ? console.log("you need a rain coat")
//   : console.log("no neeed");

// isRaining = false;

// isRaining ? console.log("You need rain coat") : console.log("no need");

//Windows Methods
//alert - builtin method displays an alert box with ok button and takes arguments
// let message = "this is the first alert";
// alert(message);

//prompt()

//to take input values and input value can be stored in a variable two arguments second is optional
//for user interaction

// let number = prompt("Enter number", "number goes here");
// console.log(number);

//confirm() method
//displays a dialog box with a specified message with ok and cancel button to ask permission a user to access something takes string as an argument

//ok- true, cancel - false

// const agree = confirm("are you sure you want to delete this");
// console.log(agree);

//Date object
//use to get date and time information from a date
//create time object

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// //using getTime method()
// console.log(now.getTime());

// const time = Date.now();
// console.log(time);

// const now = new Date();
// const year = now.getFullYear(); // return year
// const month = now.getMonth() + 1; // return month(0 - 11)
// const date = now.getDate(); // return date (1 - 31)
// const hours = now.getHours(); // return number (0 - 23)
// const minutes = now.getMinutes(); // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56

//Exercise level 1
// let firstName = "Akash";
// let lastName = "john";
// let country = "india";
// let city = "bangalore";
// let isMarried = false;
// let age = 24;
// let year = new Date().getFullYear();

// console.log(
//   typeof firstName,
//   typeof lastName,
//   typeof age,
//   typeof isMarried,
//   typeof year,
//   typeof country,
//   typeof city
// );

// let num = "10";
// let num1 = 10;

// console.log(num === num1);

// let num2 = parseInt(9.8);
// let num3 = 10;

// console.log(num2 == num3);

// console.log(2 === 2);
// console.log("hello" === "hello");
// console.log(5 > 2);

// console.log(0 == true);
// console.log(NaN === "");
// console.log(false === 0);

// console.log(4 > 3); //true
// console.log(4 >= 3); //true
// console.log(4 < 3); //false
// console.log(4 <= 3); //false
// console.log(4 == 4); //true
// console.log(4 === 4); //true
// console.log(4 != 4); //false
// console.log(4 !== 4); //false
// console.log(4 != "4"); //false
// console.log(4 == "4"); //true
// console.log(4 === "4"); //false
// console.log("python".length !== "jargon".length); //false

// console.log(4 > 3 && 10 < 12); //true
// console.log(4 > 3 && 10 > 12); //false
// console.log(4 > 3 || 10 < 12); //true
// console.log(4 > 3 || 10 > 12); //true
// console.log(!(4 > 3)); //false
// console.log(!(4 < 3)); //true
// console.log(!false); //true
// console.log(!(4 > 3 && 10 < 12)); //false
// console.log(!(4 > 3 && 10 > 12)); //true
// console.log(!(4 === "4")); //true
// console.log("dragon".search(/on/gi) != "python".search(/on/gi)); //false

// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(Date.now());

// let base = prompt("Enter Base:");
// let height = prompt("Enter height:");

// let result = 0.5 * base * height;

// alert(result);

// let a = prompt("Enter a:");
// let b = prompt("Enter b:");
// let c = prompt("Enter c");

// let perimeter = parseInt(a) + parseInt(b) + parseInt(c);

// alert(perimeter);

// let length = prompt("Enter the length of the rectangle");
// let width = prompt("Enter the width of the rectangle");

// let area = parseInt(length) * parseInt(width);
// alert(area);
// let perimeter = 2 * (parseInt(length) + parseInt(width));
// alert(perimeter);
//git hub
// let fname = prompt("Enter your name");

// let result =
//   fname.length > 7 ? alert("your name is long") : alert("your name is short");

// let firstName = prompt("Enter your firstname");
// let lastName = prompt("Enter your lastname");

// let result =
//   firstName.length > lastName.length
//     ? `Your First name ${firstName} is longer than your family name ${lastName}`
//     : `Your First name ${firstName} is smaller than your family name ${lastName}`;

// alert(result);

// let myAge = 20;
// let yourAge = 250;

// let result =
//   myAge < yourAge
//     ? console.log(`I am ${yourAge - myAge} year's smaller  than you `)
//     : console.log(`I am ${myAge - yourAge} year's older than you `);

// let birthYear = prompt("Enter birth year");

// let numInt = parseInt(birthYear);

// const currentYear = new Date().getFullYear();

// let correctAge = currentYear - numInt;

// const AGE = 18;
// let result =
//   correctAge > 18
//     ? console.log(`you are ${correctAge}. you are old enough to drive`)
//     : console.log(
//         `you are ${correctAge}. You will be allowed to drive after ${
//           AGE - correctAge
//         } Year`
//       );

// let message = prompt("Enter number of years you live :");

// let numMsg = parseInt(message);

// const year = numMsg * 365.25;

// const hours = year * 24;

// const minutes = hours * 60;

// const seconds = minutes * 60;

// console.log(seconds);

// let year = new Date().getFullYear();
// let month = new Date().getMonth();
// let date = new Date().getDate();
// let hours = new Date().getHours();
// let minutes = new Date().getMinutes();

// console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

// let result =
//   hours && minutes < 10
//     ? console.log(`${year}-${month}-${date} 0${hours}:0${minutes}`)
//     : console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
