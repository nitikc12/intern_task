//1. for Loop
//The for loop is used when you know in advance how many times you want to execute a block of code.
// for (initialization; condition; increment) {
// Code to execute
//   }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

const fruits = ["apple", "banana", "cherry"];
let arr = [];
for (let i = 0; i < fruits.length; i++) {
  arr.push(fruits[i]);
}
console.log(arr);

// for (let i = 0; i < 5; i++) {
//   console.log("This is iteration number:", i);
// }

// const numbers = [10, 20, 30, 40];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] * 2;
// }
// console.log(numbers);

// const data = [1, 2, 3, 4, 5];
// data.push(6, 7);

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

// const countries = [
//   "nepal",
//   "sweden",
//   "finland",
//   "srilanka",
//   "norway",
//   "denmark",
// ];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);

// adding all elements in array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// const numbers1 = [2, 3, 4, 5, 6, 7, 8, 1, 111, 23];
// const newArr1 = [];
// let sum1 = 0;
// for (let i = 0; i < numbers.length; i++) {
//   newArr1.push(numbers[i] ** 2);
// }
// console.log(newArr1);

//2.while loop
//The while loop is used when you want to repeat a block of code as long as a condition remains true. It’s useful when you don’t know beforehand how many iterations are needed.
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let userInput = "";
// while (userInput !== "exit") {
//   userInput = prompt("Enter a command(type exit to quit)");
//   console.log("You entered", userInput);
// }

//infinite while loop
// let running = true;

// while (running) {
//   if (someCondition) {
//     userInput = prompt('Enter a command (type "exit" to quit):');
//     running = false;
//   }
// }
// let a = 0;
// do {
//   console.log(a);
//   i++;
// } while (i < 5);

// const correctPassword = "secret";
// let userInput = "";

// while (userInput !== correctPassword) {
//   userInput = prompt("Enter a pass");
//   if (userInput !== correctPassword) {
//     console.log("Incorrect password try again");
//   }
// }
// console.log("password accepted");

// let i = 10;

// while (i > 0) {
//   console.log(i);
//   i--;
// }
// console.log("blast off");

//3.do while loop
//The do...while loop is similar to the while loop but guarantees that the code block is executed at least once, because the condition is checked after the code block runs.

// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 5);

// Goal: Continue generating random numbers between 1 and 10 until a number greater than 5 is generated.
// let randomNumber;

// do {
//   randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// } while (randomNumber <= 5);
// console.log(randomNumber);

//4. for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. It’s useful for working with objects, not arrays.
