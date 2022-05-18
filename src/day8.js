//scope
//Global & local
//Window global object:

// a = "javascript";
// b = 10;

// function letLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }

// letLearnScope();
// console.log(a, b);

//Global scope
//accessed anywhere in the same file  or global to some relative & block of codes.

// let a = "Akash";
// let b = "john";

// function fulName() {
//   console.log(a, b);

//   if (true) {
//     let a = "akash";
//     let b = "Ramesh";
//     console.log(a, b);
//   }
//   console.log(a, b);
// }

// console.log(a, b);

// fulName();

//local Scope
//variable declared as local can be accessed in certain block code.
//Block Scope // Function Scope

// let a = "javascript";
// let b = 10;

// function letsLearnScopt() {
//   console.log(a, b);
//   let value = false;

//   //block Scope
//   if (true) {
//     let a = "python";
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = !value;
//     console.log(a, b, c, d, value);
//   }
//   console.log(a, b, value);
// }

// letsLearnScopt();
// console.log(a, b);

//var-only function scoped
//let and const = blockscope(if, loop,function)

// function learnScope() {
//   var string = "Hello";
//   console.log(string);
// }

// learnScope();

// if (true) {
//   var string = "Akash";
//   console.log(string);
// }

// console.log(string);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("testing");
// console.log(i);

//to avoid this problem we have to use let blockscoped

//object
//Every thing can be object
//obj have properties
//properites have value ,it's a key value pair //there isno order of key

//creating an empty object

// const person = {};

//creating objects with values;

// const rectangle = {
//   length: 20,
//   width: 20,
// };

// console.log(rectangle);

const person = {
  firstName: "Akash",
  lastName: "Ramesh",
  age: 250,
  country: "India",
  city: "Bangalore",
  skills: ["html", "Css", "js", "reactjs", "redux"],
  isMarried: false,
  getFullName() {
    return this.firstName + this.lastName;
  },
};

// console.log(person);

//getting Value from an object
//using . operator followed by keyname
//using ['']

// console.log(person.getFullName());
// console.log(person["skills"]);

person.nationality = "Indian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

// console.log(person);

person.getPersonInfo = function () {
  let skillWithOutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(",");

  let lastSkill = this.skills.splice(this.skills.lenth - 1)[0];

  let skill = `${skillWithOutLastSkill}, and ${lastSkill}`;

  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teachers ${skill}`;
  return statement;
};

// console.log(person.getPersonInfo());

//Object methods
//object Assign
//to copy an object without modifying the original object

// const copyPerson = Object.assign({}, person);

// console.log(copyPerson);

// //getting object keys using object.key() in //Array

// const keys = Object.keys(person);

// console.log(keys);

//objectEntries()

// const entries = Object.entries(person);

// console.log(entries);

//checking properties exist ina  object

//hasOwnProperty()

// console.log(person.hasOwnProperty("firstName"));
