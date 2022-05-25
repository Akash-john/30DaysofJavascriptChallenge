//console Object methods
//Console.log()
//show output on browsers
//substitute values  & style the logging output.

//Showing output on browser console.

// console.log("Akash");

// //substitution
// console.log("%d %s of Javascript", 30, "Days");

// //css
// console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
// console.log(
//   "%c30 Days%c %cOf%c %cJavaScript%c",
//   "color:green",
//   "",
//   "color:red",
//   "",
//   "color:yellow"
// ); // log output green red and yellow text

//Console.Warn()
//give warning on browser.

// console.warn("This is a warning");
// console.warn(
//   "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
// );
// console.warn("Warning is different from error");

//Console.error()

//shows error message
// console.error("This is an error message");

//console.table()
//Displays data as a table
//array as table with  index column and value column

// const names = ["Akash", "ramesh"];
// console.table(names);

// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// console.table(user);

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// console.table(countries);

// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.table(users);

//console.time()

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// console.time("Regular for loop");
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1]);
// }
// console.timeEnd("Regular for loop");

// console.time("for of loop");
// for (const [name, city] of countries) {
//   console.log(name, city);
// }
// console.timeEnd("for of loop");

// console.time("forEach loop");
// countries.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd("forEach loop");

//console.infor()

//displays information messagae on browser console.
// console.info("my game");
// for (let i = 0; i <= 10; i += 1) {
//   let errorMessage = `${i} is not even`;
//   console.log("the # is " + i);
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
// }

//console.group()

//help to group different log groups
// const names = ["Asabeneh", "Brook", "David", "John"];
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];

// console.group("Names");
// console.log(names);
// console.groupEnd();

// console.group("Countries");
// console.log(countries);
// console.groupEnd();

// console.group("Users");
// console.log(user);
// console.log(users);
// console.groupEnd();

//console.count();

//prints no of times the console.count() is called

//takes string label parameter
// (function name() {
//   console.count("function has been called");
// })();

//console.clear()
//clear the browser console
