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

//Exercises

// function fullName() {
//   let firstName = "Akash";
//   let lastName = "Ramesh";
//   let fullName = firstName + lastName;
//   return fullName;
// }

// console.log(fullName());

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// console.log(fullName("Akash", "john"));

// function addNumbers(a, b) {
//   let sum = a + b;

//   return sum;
// }

// console.log(addNumbers(1, 5));

// function areaOfReactangle(length, width) {
//   let area = length * width;
//   return area;
// }

// console.log(areaOfReactangle(3, 3));

// function perimeterOfRectangle(length, width) {
//   let perimeter = 2 * (length + width);
//   return perimeter;
// }

// console.log(perimeterOfRectangle(2, 3));

// function rectangularprism(r) {
//   const PI = 3.14;
//   let volume = PI * r * r;
//   return volume;
// }

// console.log(rectangularprism(3));

// function circumOfCircle(r) {
//   const PI = 3.14;
//   let circumference = 2 * PI * r;
//   return circumference;
// }

// console.log(circumOfCircle(1));

// const density = (mass, volume) => {
//   let density = mass / volume;
//   return density;
// };

// console.log(density(10, 5));

// const calculateSpeed = (totaldistance, movingObject, time) => {
//   let speed = totaldistance / movingObject / time;
//   return speed;
// };

// console.log(calculateSpeed(2,10,20));

// const weight = (mass, gravity) => {
//   let weight = mass * gravity;
//   return weight;
// };

// console.log(weight(2, 3));

// const convertCelsiusToFahrenheit = (oC) => {
//   let oF = (oC * 9) / 5 + 32;
//   return oF;
// };
// console.log(convertCelsiusToFahrenheit(40));

// const bmi = (weight, height) => {
//   let bmi = weight / (height * height);

//   if (bmi <= 18.5) {
//     console.log(`Underweight: BMI is less than 18.5`);
//   } else if (bmi <= 24.9 && bmi >= 18.5) {
//     console.log(`Normal weight: BMI is 18.5 to 24.9`);
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log(`Overweight: BMI is 25 to 29.9`);
//   } else {
//     console.log(`Obese: BMI is 30 or more`);
//   }
//   return bmi;
// };

// bmi(200, 5);

// const findMax = (...args) => {
//   let i = 0;
//   let maximum;

//   while (i < args.length) {
//     if (args[i] > maximum) {
//       maximum = args[i];
//     }
//   }
//   return maximum;
// };

// console.log(findMax(1, 2, 3, 4));
