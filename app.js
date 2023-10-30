// VARIABLE NAMES:	LEGAL	&	ILLEGAL
// 1. Declare 3 variables in one statement.
// solution

// var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names.
// solution

// legal Variables
// let userName123;
// let $ageNo;
// let father_Name;
// let  _123birthDate;
// let s$No;

// illegal variables

// let 123userName;
// let age-Name;
// let #fatherName;
// let S No;
// let birth%Date;

// 3. Display this in your browser
// a. A heading stating “Rules for naming JS variables”
// b. Variable names can only contain  _____, ______, 
// ______ and ______. 
// For example $my_1stVariable
// c. Variables must begin with a ______, ______ or 
// _____. For example $name, _name or name
// d. Variable names are case _________
// e. Variable names should not be JS _________

// b. 1 blank is letter
// b. 2 blank is number
// b. 3 blank is undersores
// b. 4 blank is dollar sign

// c . 1 blank letter
// c . 2 blank underscores
// c . 3 blank dollar sign

// d . 1 blank is case-sensitive

// e . 1 blank is keywords

// ====end ===

// MATH	EXPRESSIONS

// 1. Write a program that take two numbers & add them in a new 
// variable. Show the result in your browser.
// solution
// var number = alert("result of add num is 3 + 3 = 9")
// console.log(number)

// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. E.g.
// solution
// var number123 = alert("result of subtraction num is 3 - 1 = 2")
// console.log(number123)

// var $number = alert("result of multiply num is 3 * 6 = 18")
// console.log($number)

// var number1234 = alert("result of  dividing  13  by 9 is  1.44444444444444444")
// console.log(number1234)

// var number1235 = alert("Reminder of dividing  13 by 9 is 4 ")
// console.log(number1235)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets 
// to a movie. Example output:

// solution
// var ticketPrice = 600; 

// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;

// console.log("The cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR.");

// 5. Write a script to display multiplication table of any number in 
// your browser. E.g.

// solution

// 8. Write a script to take total marks & marks obtained by a 
// student. Compute the percentage & show the result in your 
// browser.

// solution


// let urduMarks = Number(prompt('Enter urdu marks'));
// let engMarks = Number(prompt('Enter english marks'));
// let mathsMarks = Number(prompt('Enter maths marks'));
// let phyMarks = Number(prompt('Enter physices marks'));
// let bioMarks = Number(prompt('Enter biology marks'));

// let totalMarks = 400;
// let usertotal = urduMarks + phyMarks + mathsMarks + engMarks + bioMarks
// let percentage = usertotal / totalMarks * 100;

// console.log('marksheet ' + "totalobained" + totalMarks + percentage + "%.")

// USER	INPUT	&  CONDITIONAL	STATEMENTS

// Write a program that takes input a name from user & greet the 
// user like this:

// solution

// let userName = prompt('Enter your name');
// console.log(userName);

// 2. Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by 
 // default

//  solution

// Prompt the user to enter a number
// var userInput = prompt("Enter a number to display its multiplication table:");

// // Convert the input to a number, or use 5 as the default if no input
// var number = parseFloat(userInput) || 5;

// // Create a table header
// var table = "Multiplication Table for " + number + ":\n\n";

// // Generate and display the multiplication table
// for (var i = 1; i <= 10; i++) {
//   table += number + " x " + i + " = " + (number * i) + "\n";
// }

// // Display the table in an alert
// alert(table);

// 3. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// of lights”

// let userName = prompt('Enter your city name');
// console.log(userName);

// alert("welcome to garbage city")

// 7. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car”

// solution

// Prompt the user to enter the remaining fuel in the car (in litres)
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// // Check if the remaining fuel is less than 0.25 litres
// if (remainingFuel <= 0.25) {
//   alert("Please refill the fuel in your car.");
// } else {
//   alert("You have  fuel. Drive safely!");
// }

// 8. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5)
//  alert("given condition for variable a is true")

//   var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }
// // USER	INPUT	&	CONDITIONAL	STATEMENTS |	JAVASCRIPT
// // Page	5 of 12
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
//  if (true)
//  alert("True");

// if (false){
//  alert("False");
// }
// if("car" < "cat")
//  alert("car is smaller than cat")








