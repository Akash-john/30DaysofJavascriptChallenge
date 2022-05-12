//Function
//reusable block of code or programming statements designed to perform a certain task .
//parameter called like argument
//clean and easy to read
//reusable
//Call or invoke function
//easy to test

//declaration of function

//DeclartionFunction
//expression function
//anonymous function
//arrow function

//Function without a parameter and return;

// function numCount(params) {
//   let s = 10;
//   let r = 11;
//   let sum = s + r;
//   console.log(sum);
// }

// numCount();

//Function returning value:
//if function doesn't return the function value undefined.

// function myData() {
//   let firstName = "Akash";
//   let lastName = "john";
//   let fullName = `${firstName} ${lastName}`;
//   return fullName;
// }

// console.log(myData());

//Function with a parameter and return value

// function addSum(a, b) {
//   let sum = a * b;
//   return sum;
// }

// console.log(addSum(14, 20));

//function with many parameters

// function numValue(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const num = [1, 2, 3, 4, 5];

// console.log(numValue(num));

//Function with unlimited number of parameters(regular function)

// function sumOfArray() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// console.log(sumOfArray(1, 2, 3, 4));

//Arrow function does not have the function scoped argumnets object
//For this we are using rest operator
//any thing we passeed in func can be accessed as array

// const numArray = (...args) => {
//   let sum = 0;

//   for (const element of args) {
//     sum += element;
//   }

//   return sum;
// };

// console.log(numArray(1, 3, 4234, 345));

//Anonymous  Function

//A fuction with out name:

// const anonymous = function () {
//   console.log("this is anonymous function");
// };

//Expression Function
//Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

// const square = function (n) {
//   return n * n;
// };

// console.log(square(5));

//self invoking Function or immediate invoking function
//we can assign this func to variable

// (function name(n) {
//   return console.log(n * n);
// })(3);

// const changeUpperCase = (args) => {
//   const newARR = [];

//   for (const arr of args) {
//     newARR.push(arr.toUpperCase());
//   }
//   return newARR;
// };

// const arr = ["akash", "john"];

// console.log(changeUpperCase(arr));

//Function with default parameters

// function generateName(firstName = "Akash", lastName = "John") {
//   let fullName = firstName + lastName;
//   return fullName;
// }

// console.log(generateName());
// console.log(generateName("Arasu", "Ramesh"));
