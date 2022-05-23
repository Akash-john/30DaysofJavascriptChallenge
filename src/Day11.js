// //Destructirng array and Spread

// //way to unpack arrays and objects
// //assing them to distinct variables

// //Destructing Arrays

// // const numbers = [1, 2, 3];
// // let [numOne, numTwo, numThree] = numbers;

// // console.log(numOne, numTwo, numThree);

// // const fullStack = [
// //   ["Html", "Css", "JS", "react"],
// //   ["Nodejs", "MongoDB", "Express"],
// // ];

// // let [frontEnd, backEnd] = fullStack;
// // console.log(frontEnd, backEnd);

// //Skip array values with comma
// // const numbers = [1, 2, 3];
// // let [numOne, , numThree] = numbers;

// // console.log(numOne, numThree);

// //We can use default value in case the value of array for that index is undefined:
// // const names = [undefined, "Brook", "David"];
// // let [
// //   firstPerson = "Asabeneh",
// //   secondPerson,
// //   thirdPerson,
// //   fourthPerson = "John",
// // ] = names;

// // console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// //We can't assign variable to all the elements in the arry
// //we can destructure it with rest opeartor

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let [num1, num2, num3, ...rest] = nums;
// // console.log(num1, rest);

// //Destructing during iteration

// // const countries = [
// //   ["Finland", "Helsinki"],
// //   ["Sweden", "Stockholm"],
// //   ["Norway", "Oslo"],
// // ];

// // for (const [country, city] of countries) {
// //   console.log(country, city);
// // }

// //Destructring Object

// // const rectangle = {
// //   width: 20,
// //   height: 10,
// //   area: 200,
// // };

// // let { width, height, area, perimeter } = rectangle;

// // console.log(width, height, area, perimeter);

// // const rectangle = {
// //   width: 20,
// //   height: 10,
// //   area: 200,
// // };

// // let { width: w, height: h, area: a, perimeter: b } = rectangle;

// // console.log(w, h, a, b);

// // const rectangle = {
// //   width: 20,
// //   height: 10,
// //   area: 200,
// // };

// // let { width: w, height: h, area: a, perimeter = 30 } = rectangle;

// // console.log(w, h, a, perimeter);

// //Object parameter without destructring

// // const rect = {
// //   width: 20,
// //   height: 22,
// // };

// // // const calculatePerimeter = (rectangle) => {
// // //   return 2 * (rectangle.width + rectangle.height);
// // // };

// // // console.log(calculatePerimeter(rect));

// // //Object parameter with destructring

// // const calculatePerimeter = ({ width, height }) => {
// //   return 2 * (width + height);
// // };

// // console.log(calculatePerimeter(rect));

// //Destructring object during iteration

// // const todoList = [
// //   {
// //     task: "Prepare JS Test",
// //     time: "4/1/2020 8:30",
// //     completed: true,
// //   },
// //   {
// //     task: "Give JS Test",
// //     time: "4/1/2020 10:00",
// //     completed: false,
// //   },
// //   {
// //     task: "Assess Test Result",
// //     time: "4/1/2020 1:00",
// //     completed: false,
// //   },
// // ];

// // for (const { task, time, completed } of todoList) {
// //   console.log(task, time, completed);
// // }

// //Spread or Rest Operator
// //Spread operator to get the rest of array elements

// // const nums = [1, 2, 3, 4, 5];
// // let [num1, num2, ...rest] = nums;

// // console.log(num1, rest);

// //Spread operator to copy array
// // const evens = [0, 2, 4, 6, 8, 10];
// // const odds = [1, 3, 5, 7, 9];

// // const wholenum = [...evens, ...odds];

// // console.log(wholenum);

// //Spread operator to copy object
// //and modifying the object

// // const user = {
// //   name: "Asabeneh",
// //   title: "Programmer",
// //   country: "Finland",
// //   city: "Helsinki",
// // };

// // const copiedUser = { ...user, title: "Developer" };

// // console.log(copiedUser);

// //Spread Operator with arrow function//

// //with rest operator argument when we invoke function will change to an array

// // const sumAllnums = (...args) => {
// //   console.log(args);
// // };

// // sumAllnums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // const sumAllnums = (...args) => {
// //   let sum = 0;

// //   for (const num of args) {
// //     sum += num;
// //   }

// //   return sum;
// // };

// // console.log(sumAllnums(22, 333, 55));

// //Exercise

// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// };
// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ];

// // let [e, pi, gravity, humanBodyTemp] = constants;

// // console.log(e, pi, gravity, humanBodyTemp);
// // let { width, height, area, perimeter } = rectangle;

// // console.log(width)

// for (const { name, scores, skills, age } of users) {
//   if (skills.length >= 2) {
//     console.log(name);
//   }
// }
