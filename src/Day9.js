//higher Order Function
//function which takes another function as parameter
//return a function as value.
//passed function is called call back

//Callback

//function can be passed as a parameter.
// const callback = (n) => {
//   return n * 2;
// };

// function functionName(callback, n) {
//   return callback(n) * 2;
// }

// console.log(functionName(callback, 1));

//Returning Function.
//Higher order Function return as a Value.

// const highOrder = (h) => {
//   const doSomeThing = (s) => {
//     const doWhatEver = (e) => {
//       return h * s * e;
//     };
//     return doWhatEver;
//   };
//   return doSomeThing;
// };

// console.log(highOrder(1)(2)(3));

//Foreach loop takes as call back function

// const numbers = [1, 2, 3, 4, 5];

// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };

//   arr.forEach(callback);
//   return sum;
// };

// console.log(sumArray(numbers));

// const numbers = [1, 2, 3, 4, 5];

// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach((e) => {
//     sum += e;
//   });
//   return sum;
// };

// console.log(sumArray(numbers));

//Setting time
//can execute some code in a certain interval or we can schedule a(wait )time to execute some activites

//setInterval
//setTimeout
//clearInterval

//Setting using a setInterval function
// global method
//callback & duration parameter
//duration in milliseconds
// todo some activity continously with some interval of time

// setInterval(() => {
//   console.log("this is setInterval");
// }, 1000);

//setting a time using a setTimeout
//To execute some action at sometime inthe future
//global method
//callback function
//duration millisecond and wait to execute for some amount of time

// setTimeout(() => {
//   console.log("SetTimeout log");
// }, 2000);

//Functionl Programming

//latest js introduced lots of builtin methods
//solve to complicated  problems
//All builtinMethod takes call back
//forEach, map, filter,reduce, find, every some , and sort .

//forEach

//Iterate an array elements
//takes a callback ,index and array optional

/* let sum = 0;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => (sum += num));

console.log(sum);
 */

// const countries = ["India", "Canada", "usa", "uk"];

// countries.forEach((element) => console.log(element.toUpperCase()));

//map
//iterate the array & modify the element
//returns a new array
//takes call back index and array as optional parameter

// const numbers = [1, 2, 3, 4, 5];

// const numberSquare = numbers.map((num) => {
//   return num * num;
// });

// console.log(numberSquare);

// const names = ["Akash", "john", "Ramesh", "Sumithra"];

// const namesToUpperCase = names.map((nameUpper) => nameUpper.toUpperCase());

// console.log(namesToUpperCase);

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

//arrow function

// const countriesUpperCase = countries.map((con) => {
//   return con.toUpperCase();
// });

// console.log(countriesUpperCase);
// //explict return arrow function

// const countriesUpperCase1 = countries.map((con) => con.toUpperCase());

// console.log(countriesUpperCase1);

// const sliceCountries = countries.map((ele) => {
//   return ele.slice(0, 5);
// });

// console.log(sliceCountries);

//filter

//Filter out items
//full fill filtering conditons
//return new array
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const countriesContainingLand = countries.filter((country) =>
//   country.includes("land")
// );

// console.log(countriesContainingLand);

// const countriesEndByia = countries.filter((country) => country.endsWith("ia"));
// console.log(countriesEndByia);

// const countriesHaveFiveLetters = countries.filter(
//   (count) => count.length === 5
// );

// console.log(countriesHaveFiveLetters);

//Iterate through array of objects

// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Lidiya", score: 98 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];

// const scoresGreaterEighty = scores.filter((score) => score.score > 90);
// console.log(scoresGreaterEighty);

//reduce
//takes call back function with parameter acc, currentindex, initial value(optional)
//returns single value
// good parctice is to define an inital value for the accumalor
//default  will get arry firstValue
//empty array js thrown an error

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, currVAl) => {
//   return acc + currVAl;
// }, 0);

// console.log(sum);

//every

//check if all the elements are similiar with data type one aspects
//return boolean
// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Lidiya", score: 98 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];

// const allAreStr = scores.every((name) => name.score == "string");

// console.log(allAreStr);

//find
//Returns the first element which satisfy the condition

// const ages = [22, 33, 22, 5, 6, 52, 23];

// const age1 = ages.find((num) => num < 18);

// console.log(age1);

//findIndex

//return the positon of firstElement
//which satisfies the condition

// const ages = [1, 2, 344, 5532, 222];

// const agesIdx = ages.findIndex((age) => age < 20);

// console.log(agesIdx);

//some

//check if  some of the elements are similiar inone ascpect and returns boolean

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const bools = [true, true, true, true];

// const areSomeTrue = names.some((num) => num === true);

// console.log(areSomeTrue);

//sort
//method arranges the array elements in asec or desc
//sorts value as strings
//works well in string not for numbers
//numbers sorted as string it will give us wrong result
//keep original data before sorting

// const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];

// console.log(products.sort());

//sorting numeric values
//compare call back function inside sort method
//which return negative , positive and zero

// const numbers = [9.81, 3.14, 100, 37];

// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(numbers);

//Sorting Object Arrays
// const users = [
//   { name: "Asabeneh", age: 150 },
//   { name: "Brook", age: 50 },
//   { name: "Eyob", age: 100 },
//   { name: "Elias", age: 22 },
// ];

// users.sort((a, b) => {
//   if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;
//   return 0;
// });

// console.log(users);

//Exercise

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook", 2, 3];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// countries.forEach((country) => console.log(country));

// names.forEach((nam) => console.log(nam));

// const upperCase = countries.map((country) => country.toUpperCase());
// console.log(upperCase);
// const length = countries.map((len) => len.length);
// console.log(length);

// const square = numbers.map((sqr) => sqr * sqr);

// console.log(square);

// const upperCaseName = names.map((upr) => upr.toUpperCase());

// console.log(upperCaseName);

// const product = products.map((pro) => pro.price);

// console.log(product);
// const con = countries.filter((coun) => coun.includes("land"));

// console.log(con);
// const charc = countries.filter((charcc) => charcc.length === 6);

// console.log(charc);

// const charc = countries.filter((charcc) => charcc.length >= 6);

// console.log(charc);

// const E = countries.filter((coun) => coun.startsWith("F"));

// console.log(E);

// const getStringlists = (arr) => {
//   return arr.filter((str) => typeof str === "string");
// };

// console.log(getStringlists(names));
