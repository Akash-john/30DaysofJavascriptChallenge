//Arrays
//store mutliple values
//Each value has index
//index has reference in memory address
//value can be accesed with index and index starts from 0
//its collection of different datatype(modifiable) storing duplicate elements //
//it can be empty

//how to create an empty Array

//using Array constructor
// const arr = Array();
// let arr1 = new Array();
// console.log(arr, arr1);

//using square brackets
// const arr = [];
// console.log(arr);

//How to create an array with values

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
// const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// console.log("Numbers:", numbers.length);

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// console.log("Vegetables:", vegetables);
// console.log("Number of vegetables:", vegetables.length);

// console.log("Animal products:", animalProducts);
// console.log("Number of animal products:", animalProducts.length);

// console.log("Web technologies:", webTechs);
// console.log("Number of web technologies:", webTechs.length);

// console.log("Countries:", countries);
// console.log("Number of countries:", countries.length);

//Array can have items of different data types

// const arr = [
//   "Akash",
//   24,
//   true,
//   { country: "finland" },
//   { skills: ["html", "css", "js", "redux", "react", "nodejs", "mongo DB"] },
// ];

// console.log(arr);

//Creating an array using split

// let js = "javascript";

// const characInJs = js.split("");

// console.log(characInJs);

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

// const companies = companiesString.split(", ");

// console.log(companies);

// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// const words = txt.split(" ");

// console.log(words);

//Accessing array items using index

//we can access each element in array using their index.index starts from 0

// const fruits = ["banana", "orange", "mango", "lemon"];

// let firstFruit = fruits[0];

// console.log(firstFruit);

// secondFruit = fruits[1];

// console.log(secondFruit);

// lastIndex = fruits.length - 1;

// lastFruit = fruits[lastIndex];

// console.log(lastFruit);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

// console.log(numbers.length); // => to know the size of the array, which is 6
// console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
// console.log(numbers[0]); //  -> 0
// console.log(numbers[5]); //  -> 100

// let lastIndex = numbers.length - 1;
// console.log(numbers[lastIndex]); // -> 100

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ]; // List of web technologies

// console.log(webTechs); // all the array items
// console.log(webTechs.length); // => to know the size of the array, which is 7
// console.log(webTechs[0]); //  -> HTML
// console.log(webTechs[6]); //  -> MongoDB

// let lastIndex = webTechs.length - 1;
// console.log(webTechs[lastIndex]); // -> MongoDB

//Modifying array element

//Array is mutable(modifiable)

// const numbers = [1, 2, 3, 4, 5];

// numbers[0] = 10;
// numbers[4] = 100;

// console.log(numbers);

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

// countries[0] = "India";

// let lastIndex = countries.length - 1;
// countries[lastIndex] = "USA";

// console.log(countries);

//Methods to manipulate Array

//different methods to manipulate array
//Array,length,concat, indexOf,slice,splice,join, toString,includes, lastIndexOf,isArray,fill, push, pop, shift, unshift

//Array Constructor()
//To Create an Array

// const arr = Array();

// console.log(arr);

// const eightEmptyValues = Array(8);

// console.log(eightEmptyValues.length);

//creating static values with fill
//fill all the array with static values

// const arr = Array();

// console.log(arr);

// const eightXvalues = Array(8).fill("x");
// const four4values = Array(4).fill(2, 0, 4);

// console.log(eightXvalues, four4values);

//Concatenating array using concat

//concat: To concatenate two arrays

// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];

// const thirdList = firstList.concat(secondList);

// console.log(thirdList);

//getting array length

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);

//getting index of an element

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(3));

//check an element if it exist in an array

// const fruits = ["banana", "orange", "mango", "lemon"];

// let indexofAvacado = fruits.indexOf("Avacado");

// if (indexofAvacado === -1) {
//   console.log("fruit doesn't exist");
// } else {
//   console.log("fruit is there");
// }

// indexofAvacado === -1
//   ? console.log("fruit doesn't exist")
//   : console.log("fruit is there");

//Getting last Index of an element inArray
//it it exist it return the index else it returns -1

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

// console.log(numbers.lastIndexOf(0));
// console.log(numbers.lastIndexOf(3));

//includes:Tocheck if an item exist in an array. if it exist it returns the true else it returns false

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(1));

// console.log(numbers.includes(0));

//checking array

//Array.isArray : Tocheck if the data type is an array
//it returns boolean value
// const numbers = [1, 2, 3, 4, 5];
// const num = 1;
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(num));

//Converting array to string

//toString :Converts array to String

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString());
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names.toString());

//Joining array elements
//Join :  It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a STRIng. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join());

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names.join());
// console.log(names.join(""));
// console.log(names.join(" "));
// console.log(names.join(", "));
// console.log(names.join("#"));

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// console.log(webTechs.join());
// console.log(webTechs.join(", $"));

//slice array elements

//To cut out a multiple items in range.
//it takes two param starting and ending position
//it doest include the ending position

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// console.log(webTechs.slice(0));
// console.log(webTechs.slice(0, 5));
// console.log(webTechs.slice(5, 2));
// console.log(webTechs.slice(8));
// console.log(webTechs.slice(-1, 5));
// console.log(webTechs.slice(3));

//Splice method in array

//it takes three parameters:Staring position, number of times to be removed and number of items to be added.

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice();
// webTechs.splice(2, 4, "Akash");
// console.log(numbers, webTechs);

//Adding item to an Array using push and removing at last index using pop

//Adding item inthe end of an Array in existing Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(11);
// console.log(arr);
// arr.pop();
// console.log(arr);

//Removing element and adding element at first of the array using
//shift and unshift
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.shift();
// console.log(arr);
// arr.unshift(11);
// console.log(arr);

//reversing array order

//it reverse the order of an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.reverse();
// console.log(arr);

//Sorting elements in array
//in ascending order
//takes call back function
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// console.log(webTechs.sort());

//Array can store different types including an array itself
// const firstNums = [1, 2, 3];
// const secondNums = [1, 4, 9];

// const arrayOfArray = [firstNums, secondNums];
// console.log(arrayOfArray.length);
// console.log(arrayOfArray[1]);

//Exercises
// const arr = [];

// console.log(arr);

// let arr1 = Array(5);

// console.log(arr1.length);

// console.log(arr1);

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

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// console.log(countries.shift());
// console.log(countries.pop());
// console.log(countries.length - 1);
// console.log(countries[4]);

// const mixedDataTypes = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
//   [[1, 23]],
// ]; // arr containing different data types
// console.log(mixedDataTypes.length);

// let itCompanies = [
//   "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon",
// ];

// // console.log(`${itCompanies.toString()} are big IT companies`);

// let resultOfCompanies = itCompanies.toString().replace("and", " ,").split(", ");

// resultOfCompanies.length = 0;

// console.log(resultOfCompanies);
// let resultOfCompanies = itCompanies.toString().match(/oo/gi);

// // console.log(
// //   resultOfCompanies.shift(),
// // //   resultOfCompanies.pop(),
// // //   resultOfCompanies[2]
// // // );
// let indexOfCompanies = resultOfCompanies.indexOf("Apple");
// console.log(indexOfCompanies);

// if (indexOfCompanies === -1) {
//   console.log("company doesn't exist in the ITcompanies list");
// } else {
//   console.log("company does exist");
// }
// console.log(resultOfCompanies);
// console.log(resultOfCompanies.length);
// console.log(resultOfCompanies.slice(0, 3));
// console.log(resultOfCompanies.slice(-4, -1));
