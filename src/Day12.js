//RegularExpression

//small programming Language
//helps to find pattern in data
//used to check if some pattern exists in different data types
//to use RegEx in js we have to use Regexpconstrtuctor
//we can declare using two forward slash & optional flag

//string we use single quote, double quote a back tick to declare a regular
//Expression

//RegExp Prameters

//Two parameters
//required search patter/and an optional flag

//Pattern could be text or any form of pattern

//phonenumber //email format

//Flags are optional parameterss
//g:global,i:,m:

//Creating a pattern with RegExp
//Declaring regular expression without global flag and case insensitive flag.
// let pattern = "love";
// let regEx = new RegExp(pattern);

// console.log(regEx);

// Declaring regular expression with global flag and case insensitive flag.

// let pattern = "love";
// let flag = "gi";
// let regEx = new RegExp(pattern, flag);

// console.log(regEx);

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

// let RegEx = new RegExp("love", "gi");

//Creating a pattern without RegExp Constructor

// let regEx = /love/gi;

//RegExpp Object

//Testing for match

//returns true or false

// const str = "I love javascript";

// const pattern = /love/gi;

// const rslt = pattern.test(str);
// console.log(rslt);

//Match
//Returns an array value index, input,groups

// const str = "I love javascript";

// const pattern = /love/;

// const rslt = str.match(pattern);
// console.log(rslt);

//search():tests for a match in a string
//returns index of the match, or -1 if not

// const str = "I love javascript";

// const pattern = /love/;

// const rslt = str.search(pattern);
// console.log(rslt);

//Replacing a substring
//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
// const txt =
//   "Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language";

// const result = txt.replace(/Python/gi, "JavaScript");

// console.log(result);

// const txt =
//   "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

// const matches = txt.replace(/%/g, "");

// console.log(matches);

//Square Bracket
// const txt =
//   "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";

// // const pattern = "[Aa]pple";
// // const pattern = /[Aa]pple/g;
// const pattern = /[Aa]pple|[Bb]anana]/g;

// const matches = txt.match(pattern);

// console.log(matches);

// const pattern = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
// const txt =
//   "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
// const matches = txt.match(pattern);

// console.log(matches);

//Escape Character(\) in RegEx
// const pattern = /\d/g;

//One or more times (+)
// const pattern = /\d+/g;

// const pattern = /\d+/g;
// const txt = "This regular expression example was made in January 12,  2020.";

// const matches = txt.match(pattern);

// console.log(matches);

//Period(.)
// const pattern = /[a]./g; // this square bracket means a and . means any character except new line

//const pattern = /[a].+/g;

//zero or more times(*)

// const pattern = /[a].*/g;

//Zero or one times(?)

// const pattern = /[Ee]-?mail/gi;

// const txt =
//   "I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.";
// const matches = txt.match(pattern);

// console.log(matches); // ["an", "an", "an", "a ", "ar"]

//Quantifiers
// const pattern = /\b\[a-zA-Z]{4}\b/g; //
// const txt = "This regular expression example was made in December 6,  2019.";
// // const pattern = /\b\w{4}\b/g;

// const matches = txt.match(pattern);
// console.log(matches); //['This', 'made', '2019']

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
// const matches = txt.match(pattern);
// console.log(matches); //['This', 'made']

// Cart ^
// Starts with
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']
// Negation
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt.match(pattern)
// console.log(matches)  // ["6", "2019"]
// Exact match
// It should have ^ starting and $ which is an end.

// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabeneh';
// let result = pattern.test(name)

// console.log(result) // true
