// console.log("i am a tutrial on loops");

// //for loop
// let a = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(a + i);
// }

// //for in
// let obj = {
//   name: "harry",
//   role: "programmer",
//   company: "codewithniti AI",
// };
// for (const key in obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(key, element);
//   }
// }

// //for of loop
// for (const c of "harry") {
//   console.log(c);
// }

//while loop
// let i = 5;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

//for loop structure
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} + ${i} = ${i + i}`);
// }

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
// }
// console.log(newArr);

//while loop
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//for loop
// let a = 0;
// for (let i = 0; i < 5; i++) {
//   console.log(a + i);
// }

//for of loop
// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }
// for (const num of numbers) {
//   console.log(num * num);
// }

// let sum = 0;
// for (const num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

//for of loop
// it performs over the values of iterable objects like arrays , strings , maps , sets etc
//usage : when we want to access the values directlly
// const array = [10, 20, 30];
// for (const value of array) {
//   console.log(value);
// }

//for in loop
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// const person = { name: "Alice", age: 30 };
// for (const key in person) {
//   console.log(key, person[key]);
// }

//while loop
// let count = 1;

// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// for (let i in numbers) {
//   txt += i;
// }
// console.log(txt);

// let count = 1;
// do {
//   console.log(count);
//   count++;
// } while (count >= 5);

// const fruits = ["apple", "banana", "cherry"];
// let arr = [];
// for (let i = 0; i < fruits.length; i++) {
//   arr.push(fruits[i]);
// }
// console.log(arr);

// const fruits1 = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits1.length; i++) {
//   console.log([i], fruits[i]);
// }

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
// let arr1 = [];
// for (i = 0; i < countries.length; i++) {
//   let country = countries[i];
//   let length = country.length;
//   arr1.push(length);
// }
// console.log(arr1);

// // Loop from 0 to 10
// for (let i = 0; i <= 10; i++) {
//   let result = i * i; // Calculate the square of the number
//   console.log(`${i} x ${i} = ${result}`); // Print the pattern
// }

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const nation = countries.map((country) => country.toUpperCase());
console.log(nation);

// Create an array of objects with country code and index

const nationMap = nation.map((country, idx) => {
  newArr = [];
  return {
    country: country, // The uppercase country name
    idx: idx, // The index of the country in the original array
    code: country.slice(0, 3), // The first 3 letters of the uppercase country name
  };
});
newArr.push(nationMap);
console.log(newArr);

// // Create the final array of arrays
// const newArr = countries.map((country) => {
//   // Convert country to uppercase and get the first 3 letters
//   const code = country.toUpperCase().slice(0, 3);
//   // Get the length of the country name
//   const length = country.length;
//   // Return the desired format as an array
//   return [country, code, length];
// });

// console.log(newArr);

// const nation = countries.map((country) => country.toUpperCase());
// console.log(nation);

// const nationMap = nation.map((country, idx) => {
//   return {
//     ...country,
//     // country,
//     idx: idx,
//     code: country.name.slice(0, 3).toUpperCase(),
//   };
// });

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// const countries2 = [
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

// const nation = countries.map((country) => country.toUpperCase());
// console.log(nation);
// const nationWise = countries2.filter((country) =>
//   country.toLowerCase().includes("land")
// );

// console.log(nationWise);
// if (nationWise.length > 0) {
//   console.log('Countries with "land" in their name:', nationWise);
// } else {
//   console.log('There are no countries with "land" in their name.');
// }

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const countries3 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// nationCountry = countries3.filter((country1) =>
//   country1.toLowerCase().includes("ia")
// );
// console.log(nationCountry);

// if (nationCountry.length > 0) {
//   console.log("it contains");
// } else {
//   console.log("it doesnt");
// }

// nationCountry = countries3.filter((country1) => country1.length === 5);
// console.log(nationCountry);
