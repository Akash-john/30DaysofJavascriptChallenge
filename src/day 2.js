//string methods
//primitve data type cannot be modified

//1 :length:no of characteristics in string

// let js = "javascript";
// console.log(js.length);

// let firstName = "Akash Ramesh";
// console.log(firstName.length);

//2 : Accessing characters  in a string:
//using index starts at 0. last index is the length of the string minusone
// let string = "javascript";

// let firstLeter = string[0];
// console.log(firstLeter);

// let lastLetter = string.length - 1;

// console.log(lastLetter);
// console.log(string[lastLetter]);

//3: toUpperCase() method
//changes whole string into uppercase.

// let string = "javascript";

// let upperCaseString = string.toUpperCase();

// console.log(upperCaseString);

//4: toLowerCase() method
//changes whole string into lowerCase

// let string = "javaScripT";

// console.log(string.toLowerCase());

//5:substr()
//it takes two arguments , the starting index and number of characters to slice

// let string = "javascript";

// console.log(string.substr(4));

//6:substring():
//it takes two arguments the starting index and stopping index doesn't include the stopping index in characters
// let myRole = "FullStackDeveloper";

// console.log(myRole.substring(4, 1));

//7 :split():
//splits a string at a specified place.
//change to array
//split in to an array at space

// let mySplit = "hello how are you my friend ?";

// console.log(mySplit.split());
// console.log(mySplit.split(" "));

//8 : trim();
//it removes trailing spaces inthe begin at the end of the string

// let string = " Ramesh Sumithra ";

// console.log(string.trim(" "));

//9: includes()
//its takes substring arg returns boolen value
//charcter should be in alphabets /small letters

// let string =
//   "i will become more powerful coder and architect in upcoming years";

// console.log(string.includes("years"));

//10.replace()
//it takes two para oldstring and new string..

// let string = "i will be a frontend developer";

// console.log(string.replace("frontend developer", "full stack developer"));

//12: charAt():
//it takes index and returns the value at the index

// let string = "Akash";

// console.log(string.charAt(1));

//13: charCodeAt():
// it takes index and it returns char code (ASCII number)

// let string = "Akash";
// console.log(string.charCodeAt(1));

//14: indexOF()
//takes substring and if the substring exists in a string it returns the first position of the substring if doesnot exist it returns -1

// let string = "i will be more powerful";

// console.log(string.indexOf("more"));
// console.log(string.indexOf("More"));

//14 : lastIndexOf()
//last position of the substring

// let string = "i will be more powerful in future i will";

// console.log(string.lastIndexOf("will"));
// console.log(string.lastIndexOf("Will"));

//15: concat(): it takes many substring and join them

// let string = "30";

// console.log(string.concat("Days", "of", "javascript"));

//16: Startswith"
//return boolen value.

// let string = "love is the best to in this world";

// console.log(string.startsWith("ove"));

//17:endsWith()
//retrun boolen value

// let string = "Love is the most powerful";
// console.log(string.endsWith("powerful"));

//18: search ()
//takes arg retrun index of the first match

// let string =
//   "I love javascript. If you do not love JavaScript what else can you love.";

// console.log(string.search("love"));

//19: match();
//it takes substring or regular expression
//return an array if not return null.

// let string = "love";

// let patternOne = /love/; //without any flag

// let patternTwo = /love/gi; //g-means to search in the whole text, i -case sensitive

// let string1 =
//   "I love javascript. If you do not love javascript what else can you love";

// // console.log(string1.match("love"));

// let pattern = /love/gi;

// console.log(string1.match(pattern));

// let txt =
//   "In 2019, I ran 30 days of python. Now in 2020 I am super exited to start this challenge";

// let regEx = /\d+/g;

// console.log(txt.match(regEx));

// 20: repeat():it takes number as arg and it retruns the repeated version of the string

// let string = "love ";
// console.log(string.repeat(3));

//changing Data Type(Casting)
//converting one data type to another data type
//parseInt(), parseFloat(),Number(), +sign,str()

//string to Int

// let num = "100";
// let numInt = parseInt(num);
// console.log(numInt);

// let num = 1000;

// let numInt = Number(num);
// console.log(numInt);

//string  to float

// let num = "100.99";
// let numFloat = parseFloat(num);
// console.log(numFloat);

// let num1 = "200.99";
// let numFloat1 = Number(num1);
// console.log(numFloat1);

// let num2 = "300.99";
// let num2Float = +num2;
// console.log(num2Float);

//Float to int

// let num = "10.93";
// let numINt = parseInt(num);
// console.log(numINt);

//Exercise level 1

// let challenge = " 30 Days Of JavaScript ";
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substr(0, 2));
// console.log(challenge.substr(3));
// console.log(challenge.includes("Script"));
// console.log(challenge.split());
// console.log(challenge.split(" "));
// let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(string.split(", "));
// console.log(challenge.replace("JavaScript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.indexOf("J"));
// console.log(challenge.charCodeAt(11));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));
// let string2 =
//   "You cannot end a sentence with because because because is a conjuction";
// console.log(string2.indexOf("because"));
// console.log(string2.lastIndexOf("because"));
// console.log(string2.search("because"));
// console.log(challenge.trim());
// console.log(string2.startsWith("You"));
// console.log(string2.endsWith("conjuction"));
// let pattern = /a/gi;
// console.log(challenge.match(pattern));

// let str = "30 days of";
// let st2 = " JavaScript";
// console.log(str.concat(st2));
// console.log(challenge.repeat(2));

//Exercise level 2
// let string =
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another";

// console.log(string);

// console.log(
//   "\"love is not patronizing and charity isn't about pity, it is about love. charity and love are the same -- with charity you give love, so don't just give money but reachout you hand instead.\""
// );
// let str1 = "10";
// let str2 = 10;
// let numINt = Number(str1);
// str1 = numINt;
// console.log(numINt == str1);

// let str = 10;
// let strFloat = parseFloat("9.8") + 0.2;
// console.log(str === strFloat);

// let first = "python",
//   second = "jargon";

// console.log(first.includes("on"));
// console.log(second.includes("on"));

// let sentence = " i hope this course is not full of jargon";

// console.log(sentence.includes("jargon"));

// let rn = Math.random() * 100;

// let result = Math.ceil(rn);
// console.log(result);

// let min = 50,
//   max = 100;
// let result = Math.floor(Math.random() * (max - min) + min);

// console.log(result);

// let result = Math.floor(Math.random() * 255);
// console.log(result);

// let str = "JavaScript";
// console.log(str[Math.floor(Math.random() * 11)]);

// console.log(
//   "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
// );

// let string =
//   "You cannot end a sentence with because because because is a conjuction";

// console.log(string.indexOf("because"));
// console.log(string.lastIndexOf("because"));

// console.log(string.substr(31, 23));

//exercise level three
// let str =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence";

// let pattern = /love/gi;

// console.log(str.match(pattern).length);
// let str =
//   "You cannot end a sentence with because because because is a conjunction";

// let pattern = /because/gi;

// console.log(str.match(pattern).length);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let regEx = /[^a-zA-Z ]/g;

console.log(sentence.replace(regEx, "").match(/love/gi).length);
