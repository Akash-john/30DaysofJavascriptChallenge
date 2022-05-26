//ErrorHandling
//js loosely-typed language
//tocatch runtime errors

//try

//wrap supspicious code that may throw an error
//alloows to define a block of code
//to test for error while being executed.

//catch :
//write to do code some thing when an error occurs.

//it has parameter will give you the error information.
//used to log n error //display some specific messages to the user

//finally

//execute regardless of the occurenece of an error.
//final block can be used to complete the remaining task
//reset variables that might have changed before error occured in try block

// try {
//   let lastName = "Akash";

//   let fullName = firstName + " " + lastName;
// } catch (e) {
//   console.log("error name", e.name);
//   console.log("error message", e.message);
// } finally {
//   console.log("In any case I will be executed");
// }

//throw:
//allow us to create a custom error.
//string, boolen, number, object.
//to throw an exception
//when you throw an exception , expression specifies the value of the exception

// throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required

// const throwErrorExamplefun = () => {
//   let message;
//   let x = prompt("Enter a number");
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "Not an number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too High";
//   } catch (err) {
//     console.error(err);
//   }
// };

// throwErrorExamplefun();

//Types of Error

//Reference Error = not defined.

//syntax error == unexpected identifier

//typeError = 10 = toLowerCase
