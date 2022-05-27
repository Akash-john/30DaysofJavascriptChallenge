//Classes
//js object programming language
//everything in js is an object with properties and methods.
//create class to create an object.
//A class like object construction or a "blue print"
//instantiate a class to create an object.
//class defines the attributes and behaviouor of objects. break,wheel, door , fueltank.
//object representing the class ex:car

//once class create => we can create objectwhenever we want.

//creating a class is called  class instantiation.

//Object literal is a single ton
///class allows to create many object .This helps to reduce amount of code and repition of code

//Defining a Classs

// class Person {}

//Class instantiation
//creating object from class

//new we cann call the name after the word new

// class Person {}

// const person = new Person();

// console.log(person);

//Class constructor is used to pass different properties and method

//class constructor
//builtinfunction
//create blue print for object

//we use this key word to attach the constructor parameter with the class

//{This} refers to class itself.

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const person1 = new Person("Akash", "Ramesh");
// const person2 = new Person("Akash", "Ramesh");
// const person3 = new Person("Akash", "Ramesh");
// console.log(person1, person2, person3);

//default constructor
// class Person {
//   constructor(
//     firstName,
//     lastName,
//     age,
//     country,
//     city,
//     role = "Full stack developer"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.role = role;
//   }
// }

// const person = new Person("Akash", "Ramesh", 30, "India", "Bangalore");

// console.log(person);

//Class methods
//builtin function.
//allows us to create blue print
//Methods are js func inside the class

// class Person {
//   constructor(
//     firstName,
//     lastName,
//     age,
//     country,
//     city,
//     role = "Full stack developer"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.role = role;
//     this.skills = [];
//     this.score = 0;
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// const person = new Person("Akash", "ramesh", 24, "India", "Bangalore");

// console.log(person.getFullName());

// console.log(person.score);

//Method could be regular method // getter //setter.

//get
//allow us to access value from the object.
//accessing properites directly form the object
//we use getter to get the value
// class Person {
//   constructor(
//     firstName,
//     lastName,
//     age,
//     country,
//     city,
//     role = "Full stack developer"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.role = role;
//     this.skills = [];
//     this.score = 0;
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
// }

// const person = new Person("Akash", "ramesh", 24, "India", "Bangalore");

// console.log(person.getFullName());

// console.log(person.getScore); //getter method dont have to call with parenthesis.

//setter method.
//Allow us to modify the value of certain properties.
// class Person {
//   constructor(
//     firstName,
//     lastName,
//     age,
//     country,
//     city,
//     role = "Full stack developer"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.role = role;
//     this.skills = [];
//     this.score = 0;
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }

//   set setSkills(skills) {
//     this.skills.push(skills);
//   }
// }

// const person = new Person("Akash", "ramesh", 24, "India", "Bangalore");

// person.setScore = 1 + 10;
// person.setSkills = "HTML";
// person.setSkills = "CSS";
// person.setSkills = "JavaScript";

// console.log(person.getFullName());
// console.log(person.score);
// console.log(person.skills);
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;
//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// const person3 = new Person("John", "Doe", 50, "Mars", "Mars city");

// person1.setScore = 1;
// person1.setSkill = "HTML";
// person1.setSkill = "CSS";
// person1.setSkill = "JavaScript";

// person2.setScore = 1;
// person2.setSkill = "Planning";
// person2.setSkill = "Managing";
// person2.setSkill = "Organizing";

// console.log(person1.getScore);
// console.log(person2.getScore);

// console.log(person1.getSkills);
// console.log(person2.getSkills);
// console.log(person3.getSkills);

// console.log(person1.getPersonInfo());
// console.log(person2.getPersonInfo());
// console.log(person3.getPersonInfo());

//static method.

//static method for class.
//static methods are not called on instances of class
//They are called on the class itself
//often utility functions,
//such functions to create or clone objects.

//static  method example
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     return now;
//   }
// }

// console.log(Person.favoriteSkill());
// console.log(Person.showDateTime());

//Inheritence

//using inheritance we can access all the properties and methods of parent class this reduce the repetition of code

//Overriding methods

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }

  receiveDamage() {
    this.health = this.health - 10;
  }
}

class Wizard extends Human {
  constructor() {
    super();
  }
  receiveDamage() {
    this.health = this.health - 5;
  }
}

var wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);
console.log(wizard);
