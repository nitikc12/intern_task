// //function
// //it can be declared without a parameter
// function square() {
//   let num = 2;
//   let sq = num + num;
//   console.log(sq);
// }
// square();

// // function printFullName() {
// //   let firstName = "NITI";
// //   let lastName = "kc";
// //   let space = " ";
// //   let fullName = firstName + space + lastName;
// //   console.log(fullName);
// // }
// // printFullName();

// function printFullName() {
//   let firstName = "NITI";
//   let lastName = "kc";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// console.log(printFullName());

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(1));

// function square(number) {
//   return number * number;
// }
// console.log(square(10));

// function setTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// setTwoNumbers(1, 2);

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("niti", "kc"));

// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// //calling a function
// console.log(sumArrayValues(numbers));

// function sumAllNums() {
//   console.log(arguments);
// }
// sumAllNums(1, 2, 3, 4);

// function sumAllNums() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }
// console.log(sumAllNums(1, 2, 3, 4));

// const sayHello = (name, greeting) => {
//   console.log("Hello" + name + greeting);
// };
// sayHello("niti", "gm");

// function fullName(firstName, lastName) {
//   fullName = firstName + " " + lastName;
//   return fullName;
// }
// console.log("niti", "kc");

// const x = {
//   name: "Niti",
//   role: "js developer",
//   exp: 10,
//   show: function () {
//     setTimeout(() => {
//       console.log(`the name is ${this.name}\nThe role is ${this.role}`);
//     }, 2000);
//   },
// };
// x.show();

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(10));

//two parameters
// function sumTwoNumber(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   return sum;
// }
// console.log(sumTwoNumber(10, 20));

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("niti", "kc"));
// const changeToUpperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };
// const countries = ["Finland", "china", "nepal", "us", "denmark", "iceland"];
// console.log(changeToUpperCase(countries));

//Function with many parameters
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

// const areaOfCircle = (radius) => {
//   let area = Math.PI * radius * radius;
//   return area;
// };
// console.log(areaOfCircle(10));

// //function declaration
// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum = sum + element;
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4));

//anonymous function
// const anonymousFun = function () {
//   console.log("I am an anonymous function");
// };

//expression function
// const square = function (n) {
//   return n * n;
// };
// console.log(square(2));

// //self invoking function
// (function (n) {
//   console.log(n * n);
// })(2);

// let squaredNum = (function (n) {
//   return n * n;
// })(10);
// console.log(squaredNum);

//arrow function
// const square = (n) => {
//   return n * n;
// };
// console.log(square(2));

// const changeToUpperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };
// const countries = ["Finland", "Nepal", "Norway"];
// console.log(changeToUpperCase(countries));

//Function with many parameters
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

//default parameter
// function greetings(name = "Peter") {
//   let message = `${name} , welcome to 30 days js`;
//   return message;
// }

// console.log(greetings());
// console.log(greetings("Asabeneh"));

// function generateFullName(firstName = "niti", lastName = "kc") {
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// console.log(generateFullName());
// console.log(generateFullName("DAVID", "Smith"));

// function calculateAge(birthYear, currentYear = 2024) {
//   let age = currentYear - birthYear;
//   return age;
// }
// console.log("Age:", calculateAge(2004));

// const weightOfObject = (mass, gravity = 9.81) => mass * gravity + " N";

// console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
// console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62));

// function fullName() {
//   let firstName = "niti";
//   console.log(firstName);
// }
// fullName();

// function fullName() {
//   let firstName = "niti";
//   let lastName = "kc";
//   let full1Name = firstName + lastName;
//   console.log(full1Name);
// }
// fullName();

// function addNumbers(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(addNumbers(4, 6));

// function area(a, b) {
//   let area = a * b;
//   return area;
// }
// console.log(area(2, 4));

// function perimeterOfRectangle(a1, b1) {
//   let perimeter = 2 * (a1 + b1);
//   return perimeter;
// }
// console.log(perimeterOfRectangle(2, 3));

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(2));

// function circumOfCircle(r) {
//   let circumference = 2 * Math.PI * r;
//   return circumference;
// }
// console.log(circumOfCircle(4));

// function densityOfSubstance(a, b) {
//   let density = a / b;
//   return density;
// }
// console.log(densityOfSubstance(2, 3));

// function temperature(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(temperature(100));

// function bodyMass() {
//   let bmi = weight / (height * height);
//   let category;
//   if (bmi < 18.5) {
//     category = " Underweight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     category = "Normal weight";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     category = " Overweight";
//   } else if (bmi >= 30) {
//     category = "obese";
//   }
//   return {
//     bmi: bmi,
//     category: category,
//   };
// }

// let weight = 70;
// let height = 1.75;
// let result = bodyMass(weight, height);
// console.log(`BMI : ${result.bmi}`);
// console.log(`Category: ${result.category}`);

// function checkSeason(month) {
//   if (["december", "january", "february"].includes(month)) {
//     category = "Winter";
//   } else if (["march", "april", "may"].includes(month)) {
//     category = "Spring";
//   } else if (["june", "july", "august"].includes(month)) {
//     category = "Summer";
//   } else if (["september", "october", "november"].includes(month)) {
//     category = "Autumn";
//   } else {
//     category = "Invalid month";
//   }
//   return {
//     month,
//     category,
//   };
// }
// console.log(checkSeason("july"));

// function findMax(a, b, c) {
//   let max = a;
//   if (b > max) {
//     max = b;
//   }
//   if (c > max) {
//     max = c;
//   }
//   return max;
// }
// console.log(findMax(15, 10, 13));

// function linearEquation(a, b, c, x, y) {
//   const result = a * y + b * y + c;
//   return result;
// }
// const a = 2;
// const b = 4;
// const c = -5;
// const x = 1;
// const y = 4;

// const value = linearEquation(a, b, c, x, y);
// console.log(value);

// const randomNumbers = [];
// for (let i = 0; i <= 10; i) {
//   const randomNumber = Math.floor(Math.random() * 200);
//   randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);

// function quadraticEquation(a, x, b) {
//   const c = a * 2 * x + b * x;
//   return -c;
// }
// console.log(quadraticEquation(1, -1, -2));

// function userIdGeneratorByUser() {
//   numberOfCharacters = parseInt(prompt("Please enter your number:"), 2);
//   numberOfIds = parseInt(prompt(" please enter a id:"), 3);
//   let characters = "rohan";
//   function generateId() {
//     let result = "";
//     const charactersLength = characters.length;
//     for (let i = 0; i < charactersLength; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     console.log(result);
//   }
//   generateId();
// }
// userIdGeneratorByUser();

// const names = ["Rohan God", "Niti Noob", "Pradina potato"];

// function generator(names1) {
//   for (let i = 0; i < names1.length; i+) {
//     console.log(`hi ${names1[i]}`);
//   }
// }
// generator(names);

// for (let niti = 4; niti < 5; niti++) {
//   console.log(niti);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// let sum = 0;
// let n = prompt("Enter the value of n");

// for (let i = 0; i < n; i++) {
//   sum += i;
// }
// console.log("Sum of first" + n + "natural number is" + sum);

// var obj = {
//   firstName: "ram",
//   lastName: "kumar",
//   age: 18,
//   country: "india",
// };
// for (var i in obj) {
//   console.log(obj[i]);
// }

// let username = "Brocode";
// while (username === "") {
//   username = window.prompt(`Enter your name`);
// }
// console.log(`hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt("Enter you username");
//   password = window.prompt("enter password");

//   if (username === "myUsername" && password === "myPassword") {
//     loggedIn = true;
//     console.log("you are logged in");
//   } else {
//     console.log("invalid");
//   }
// }

// const names = ["Rohan God", "Niti Noob", "Pradina potato", "kc", "niti"];
// function generator(names1) {
//   for (let i = 0; i < names1.length; i = i + 2) {
//     console.log(`hi ${names1[i]}`);
//   }
// }
// generator(names);
// const score = scores.find((user) => user.score > 80);
// console.log(score);

// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// );
// console.log(countriesHaveFiveLetters);

const arr = [2, 3, 5, 7, 8];

const output = arr.filter(isEven)();
return x > 4;
