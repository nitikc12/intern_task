//booleans
/*let firstName;
console.log(firstName); //not defined

let empty = null;
console.log(empty);*/ //null means no value

//operators
// == equal in value only
// === equal in value and data type
/*  != not equal*/

//increment operator
/*let count = 0;
console.log(++count); //pre-increment
console.log(count);

let count1 = 0;
console.log(count1++);
console.log(count1);*/

//decrement operator
/*let count2 = 0;
console.log(--count2);
console.log(count2);

let count3 = 0;
console.log(count3--);
console.log(count3);

//Ternery operators
let isRaining = true;
isRaining ? console.log("You need a raincoat.") : console.log("No need.");

isRaining = false;
isRaining ? console.log("you need") : console.log("no need");

let number = -1;
number > 0
  ? console.log(`${number} is positive`)
  : console.log(`${number} is negative`);
number = -5;
number > 0
  ? console.log(`${number}is positibe`)
  : console.log(`${number}is negative`);*/

//windows alert method
/*alert(message);
alert("Welcome to 30daysof js");
console.log(alert);*/

//prompt
/*let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  console.log("Hello " + person + "! How are you today?");
}*/

//window confirm method
/*const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box*/

//date object
/*const now = new Date();
console.log(now.getFullYear());

const now1 = new Date();
console.log(now1.getMonth());

const now2 = new Date();
console.log(now.getMinutes());

const now3 = new Date();
console.log(now.getSeconds());

//getting time
const now4 = new Date();
console.log(now.getTime());

const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);*/

/*const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${date}/${month}/${year} ${hours}: ${minutes}`);*/

//taks

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = "niti";
// let lastName = "kc";
// let country = "nepal";
// let city = "kathmandu";
// let age = 20;
// isMarried = false;
// console.log(typeof firstName);

// //Check if type of '10' is equal to 10
// let num1 = 10;
// let num2 = 20;
// result = num1 === num2;
// console.log(result);

// //Check if parseInt('9.8') is equal to 10
// console.log(parseInt("9.8") === 10);

// number1 = 12;
// number2 = 12;
// result = number1 == number2;
// console.log(result);

// no1 = 20;
// no2 = "20";
// result1 = no1 === no2;
// console.log(result1);

// let word1 = "python";
// let length1 = word1.length;
// console.log(length1);

// let word2 = "jargon";
// let length = word2.length;
// let resultWords = length1 == length;
// console.log(resultWords);

// //What is the year today?

// const now = new Date();
// console.log(now.getFullYear());

// const now1 = new Date();
// console.log(now1.getMonth());

// const date = now.getDate();
// console.log(date);

// const hours = now.getHours();
// console.log(hours);

// const minutes = now.getMinutes();
// console.log(minutes);

// const allSeconds = Date.now();
// console.log(allSeconds);

// //Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// /*let script = prompt("Enter height");
// let script1 = prompt("Enter base");
// let area = script1 * script;

// console.log(" The" + "area of traingle is" + area);*/

// let num = 4;
// if (num > 0) {
//   console.log(`${num} is positive`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// let a = 0;
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negtative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("you need a rain coat");
//     break;
//   case "cloudy":
//     console.log("It might be cold , you need a jacket");
//     break;
//   case "sunny":
//     console.log("Go out freely.");
//     break;
//   default:
//     console.log("No need for rain coat");
// }

// //ternery operators
// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat");

//exercises of if else
// let age = 20;
// if (age >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log("you are not 18 yet ");
// }

// let myAge = prompt("Enter age");
// let yourAge = prompt("Enter another age");
// if (myAge > yourAge) {
//   console.log("I am older");
// } else if (yourAge > myAge) {
//   console.log("You are older");
// } else {
//   console.log("valid");
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

// let number = 4;
// if (number % 2 === 0) {
//   console.log("it is even");
// } else if (number % 2 !== 0) {
//   console.log("odd");
// } else {
//   console.log("invalid");
// }

// let season = September;
// if ((September, October, November)) {
//   console.log("Autumn");
// } else if ((December, January, February)) {
//   console.log("Winter");
// } else if ((June, july, August)) {
//   console.log("Summer");
// }

// const now = new Date();
// const hours = now.getHours();
// const minutes = now.getMinutes();

// console.log(hours - 12, minutes);
