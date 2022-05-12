//Loops
//full of repetitions //repetative task we use different kind of loops

//for loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i}*${i} = ${i * i}`);
// }

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// const newArr = [];

// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }

// console.log(newArr);

//Adding all elements in the array
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(sum);
// }

//Creating a new array based on the existing array

// const numbers = [1, 2, 3, 4, 5];
// let newArry = [];

// for (let i = 0; i < numbers.length; i++) {
//   newArry.push(numbers[i] * 2);
// }

// console.log(newArry);

//While loop
//loops through a block of code as long as specified condition is true
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// let text = "";
// while (i <= 10) {
//   text += "This number is " + i;

//   i++;
// }
// console.log(text);

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < -1);

//for of loop
//we use for of loop for arrays.
//very handy to iterate through array

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num / 2);
// }

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// let newArr = [];

// for (const tech of webTechs) {
//   console.log(tech.toUpperCase());
// }

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// const newArr = [];

// for (const country of countries) {
//   newArr.push(country.toUpperCase());
//   console.log(newArr);
// }

// console.log(newArr);

//Break is used to interrupt a loop

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

//Continue is used to skip a certain iteration

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//Exercises
// let i = 10;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i <= 10);

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 0; i <= 6; i++) {
//   console.log(`#`.repeat(i));
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}  ${i * i} ${i * i * i}`);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//check the prime numbers

// let count = 0;

// let i, j;
// for (j = 2; j < 100; j++) {
//   for (i = 1; i <= j; i++) {
//     if (j % i == 0) count++;
//   }
//   if (count == 2) console.log(j);
//   count = 0;
// }

// let sum = 0;
// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//     arr.push(sum);
//   }
// }

// console.log(arr);

//unique random number
// let arr = [];

// while (arr.length < 5) {
//   let r = Math.floor(Math.random() * 100) + 1;
//   if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
