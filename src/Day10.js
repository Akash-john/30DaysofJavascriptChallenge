//Set is a collection of Elements
//contain only unique elements

//Creating an empty set
// const companies = new Set();
// console.log(companies);

//creating set from array

// const language = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const setOfLanguages = new Set(language);

// console.log(setOfLanguages);

//set is an iterable
//we can iterate through the each element

// const language = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const setOfLanguages = new Set(language);

// for (const languages of setOfLanguages) {
//   console.log(languages);
// }

//Adding an element to a set

// const companies = new Set();
// console.log(companies.size);

// companies.add("Google");
// companies.add("Google"); // add element to the set
// companies.add("Facebook");
// companies.add("Amazon");
// companies.add("Oracle");
// companies.add("Microsoft");

// console.log(companies.size);

// const companies = ["Google", "Amazon", "quickler"];
// const setOfCompanies = new Set();

// for (const company of companies) {
//   setOfCompanies.add(company);
// }

// console.log(setOfCompanies);

// //deleting an element a set

// //using delete method

// console.log(setOfCompanies.delete("Google"));
// console.log(setOfCompanies.size);

// console.log(setOfCompanies.has("Amazon"));

// setOfCompanies.clear();

// console.log(setOfCompanies);

// const language = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];

// const langSet = new Set(language);
// console.log(langSet);
// console.log(langSet.size);

// const counts = [];

// for (const l of langSet) {
//   const filteredLang = language.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ lang: l, count: filteredLang.length });
// }

// console.log(counts);

//For Instance to count unique item in an array
// const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
// const setOfCompanies = new Set(numbers);
// console.log(setOfCompanies);

//Union of Set
///using spread Operator
//AUB

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// // let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C);

////Intersection of A n B
// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);

//Difference Between of Sets
//A\B
// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => !B.has(num));
// let C = new Set(c);
// console.log(C);

//Creating an empty Map

// const map = new Map();
// console.log(map);

//Creating an Map from array
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// const map = new Map(countries);

// console.log(map);
// console.log(map.size);

// const countries = new Map();

// countries.set("Finland", "hello");
// countries.set("Akash", "Ramesh");
// countries.set("Arasu", "Ramesh");

// for (const country of countries) {
//   console.log(country);
// }

// for (const [country, city] of countries) {
//   console.log(country, city);
// }

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const country = new Set();
console.log(country);

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
let setOfNo = new Set(arr);
console.log(setOfNo);

setOfNo.clear();

console.log(setOfNo);
