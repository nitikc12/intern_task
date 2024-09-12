// const callback = (n) => {
//   return n ** 2;
// };
// function cube(callback, n) {
//   return callback(n) * n;
// }
// console.log(cube(callback, 3));

//returning function : return function as a value
// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(4));

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

//setting time

// //1. setting interval
// function sayHello() {
//   console.log("Hello");
// }
// setInterval(sayHello, 1000);

//2. setting time
// function sayHello1() {
//   console.log("hello");
// }
// setTimeout(sayHello, 2000);

//forEach
// let sum = 0;
// const numbers2 = [1, 2, 3, 4, 5];
// numbers2.forEach((num) => {
//   sum += num;
//   console.log(num);
// });
// console.log(sum);

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// countries.forEach((element) => console.log(element.toUpperCase()));

//map
// const modifiedArray = arr.map(function (element, index, arr) {
//   return element;
// });

// const numbers3 = [1, 2, 3, 4, 5];
// const numbersSquare = numbers3.map((num) => num * num);
// console.log(numbersSquare);

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const namesToUpperCase = names.map((names) => names.toUpperCase());
// console.log(namesToUpperCase);

// const country = [
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
// const countryToUpperCase = country.map((country) => country.toUpperCase());
// console.log(countryToUpperCase);

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// );
// console.log(countriesFirstThreeLetters);

// function doSomething(callback) {
//   callback();
// }

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit) => console.log(`i like ${fruit}`));

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => (sum += num));
// console.log(sum);

// const numbers = [1, 2, 3];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2, 4, 6]

// const strings = ["a", "b", "c"];
// const uppercased = strings.map((str) => str.toUpperCase());
// console.log(uppercased);

// const numbers = [1, 2, 3];
// const results = numbers.map((num) => {
//   if (num === 2) return; //this doesnot stop the program like in forEach
//   return num * 2;
// });
// console.log(results);

// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num * num);
// console.log(numbersSquare);

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
// const countriesToUpperCase = countries.map((country) => country.toUpperCase());

// const countriesObj = countries.map((country, idx) => {
//   return {
//     id: idx + 1,
//     name: country,
//   };
// });
// console.log(countriesObj);

// const nation = [
//   { id: 1, name: "Albania" },
//   { id: 2, name: "Bolivia" },
//   { id: 3, name: "Canada" },
//   { id: 4, name: "Denmark" },
//   { id: 5, name: "Ethiopia" },
//   { id: 6, name: "Finland" },
//   { id: 7, name: "Germany" },
//   { id: 8, name: "Hungary" },
//   { id: 9, name: "Ireland" },
//   { id: 10, name: "Japan" },
//   { id: 11, name: "Kenya" },
// ];
// const nationMap = nation.map((country, idx) => {
//   return {
//     ...country,
//     // country,
//     code: country.name.slice(0, 3).toUpperCase(),
//   };
// });

// console.log(nationMap);

// output = [
//     { id: 1, name: 'Albania', code:'ALB' },
//    ......
//     { id: 11, name: 'Kenya', code:'KEN' }
// ]

//filter
// const countriesContainingLand = countries.filter((country) =>
//   country.includes("land")
// );
// console.log(countriesContainingLand);

// const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
// console.log(countriesEndsByia);

// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// );
// console.log(countriesHaveFiveLetters);

// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Lidiya", score: 98 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];
// const scoresGreater = scores.filter((score1) => score1.score > 80);
// console.log(scoresGreater);

//reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

//every
// const numbers = [1, 2, 3, 4, 5];
// const allPositive = numbers.every((num) => num > 0);
// console.log(allPositive);

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const areAllStr = names.every((names) => typeof names === "string");
// console.log(areAllStr);

// const bools = [true, true, true, true];
// const areAllTrue = bools.every((b) => b === true);
// console.log(areAllTrue);

//find
// const ages = [24, 25, 22, 23, 19, 20, 18];
// const age = ages.find((age) => age < 20);
// console.log(age);

// const names = ["Niti", "kc", "elias", "Brook"];
// const result = names.find((name) => name.length > 7);
// console.log(result);

// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];

// const score = scores.find((user) => user.score > 80);
// console.log(score);

// const names = ["niti", "kc", "elias", "brrok"];
// const result = names.find((user) => user.length > 2);
// console.log(result);

// const age = [12, 33, 56, 12, 90, 34];
// const define = age.find((ages) => ages > 20);
// console.log(define);

// const names = [12, "Asabeneh", "Mathias", "Elias", "Brook"];
// const bools = [false, true, true, true];
// const areSomeTrue = bools.some((b) => b === true);
// console.log(areSomeTrue);

// const areStr = names.some((number) => typeof number === "string");
// console.log(areStr);

// const products = ["milk", "coffee", "sugar", "honeyy", "apple", "carrot"];
// console.log(products.sort());

// //ascending order
// const numbers = [9.81, 3.14, 100, 37];
// console.log(numbers.sort());
// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(numbers);

// // const numbers1 = [9.81, 3.14, 100, 37];
// // console.log(numbers1.sort());
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// const items = [
//   { name: "Apple", price: 1.5 },
//   { name: "Banana", price: 0.5 },
//   { name: "Cherry", price: 2.0 },
// ];
// items.sort(function (a, b) {
//   return a.price - b.price;
// });
// console.log(items);

// const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
// console.log(countriesEndsByia);

// const countries1 = [
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
// const countryStart = countries1.filter((country) => country.startsWith("K"));
// console.log(countryStart);

// //Use some to check if some names' length greater than seven in names array
// const names = [
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
// const names1 = names.every((names_1) => names_1.length > 7);
// console.log(names1);

// const languages = [
//   { country: "English", count: 91 },
//   { country: "French", count: 45 },
//   { country: "Arabic", count: 25 },
//   { country: "Spanish", count: 24 },
//   { country: "Russian", count: 9 },
//   { country: "Portuguese", count: 9 },
//   { country: "Dutch", count: 8 },
//   { country: "German", count: 7 },
//   { country: "Chinese", count: 5 },
//   { country: "Swahili", count: 4 },
// ];

// const ascend = languages.sort(function (a, b) {
//   return a - b;
// });

// return {
//   count: country.count.sort(function (a, b) {
//     return a - b;
//   }),

// console.lo(ascend);

// const nationMap = nation.map((country, idx) => {
//   return {
//     ...country,
//     // country,
//     code: country.name.slice(0, 3).toUpperCase(),
//   };
// });

//sorting
// const people = [
//   { name: "nitee", age: 25 },
//   { name: "bob", age: 30 },
//   { name: "Charlie", age: 20 },
// ];
// // people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.name.localeCompare(b.name)); //sorting by alphabetical
// people.sort((a, b) => a.name.localeCompare(b.name)); //reverse alphabetical
// console.log(people);

//sorting by multiple properties
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Alice", age: 20 },
//   { name: "Charlie", age: 20 },
// ];
// people.sort((a, b) => {
//   if (a.age === b.age) {
//     return a.name.localeCompare(b.name);
//   }
//   return a.age - b.age;
// });
// console.log(people);

//handling edge cases
// const people = [
//   { name: "Nitee", age: 25 },
//   { name: "Bob", age: null },
//   { name: "Charlie", age: 20 },
// ];
// people.sort((a, b) => {
//   if (a.age === null) return 1;
//   if (b.age === null) return -1;
//   return a.age - b.age;
// });
// console.log(people);

// let countries = [
//   { country: "China", population: 1377422166 },
//   { country: "India", population: 1295210000 },
//   { country: "United States of America", population: 323947000 },
//   { country: "Indonesia", population: 258705000 },
//   { country: "Brazil", population: 206135893 },
//   { country: "Pakistan", population: 194125062 },
//   { country: "Nigeria", population: 186988000 },
//   { country: "Bangladesh", population: 161006790 },
//   { country: "Russian Federation", population: 146599183 },
//   { country: "Japan", population: 126960000 },
// ];

// const ascending = countries.map((words, idx) => {
//  return{

//  }
//   });

// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Smartphone", price: 800, inStock: false },
//   { name: "Tablet", price: 500, inStock: true },
//   { name: "Monitor", price: 300, inStock: true },
//   { name: "Keyboard", price: 50, inStock: true },
// ];

// const totalPrice = products // .filter((product) => product.inStock)
//   .map((product) => product.price)
//   .reduce((total, price) => total + price, 0);

// console.log(totalPrice);

// categorizeCountries = [
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
// const countriesContainingLand = categorizeCountries.filter((country) =>
//   country.includes("land")
// );
// console.log(countriesContainingLand);

// const countries = [
//   "Argentina",
//   "Australia",
//   "Brazil",
//   "Belgium",
//   "Canada",
//   "China",
//   "Denmark",
//   "Egypt",
//   "France",
//   "Germany",
//   "Greece",
//   "Honduras",
//   "India",
//   "Japan",
//   "Kenya",
//   "Latvia",
//   "Mexico",
//   "Nigeria",
//   "Oman",
//   "Poland",
//   "Qatar",
//   "Russia",
//   "Spain",
//   "Turkey",
//   "Ukraine",
//   "Vietnam",
//   "Yemen",
//   "Zimbabwe",
// ];
// const nation = countries.map((country) => country.toUpperCase().slice(0, 3));
// console.log(nation);

// const nationMap = nation.map((country, idx) => {
//   return {
//     ...country,
//     // country,
//     code: country.name.slice(0, 3).toUpperCase(),
//   };
// });

// console.log(nationMap)

// function countStartingLetters(countries) {
//   const letterCount = {};
// }

// for (const country of countries) {
//   const firstLetter = country[0].toUpperCase();
// }

// if (letterCount[firstLetter]) {
//   letterCount[firstLetter]++;
// } else {
//   letterCount[firstLetter] = 1;
// }

// }

// const result = Object.keys(letterCount).map((letter) => ({
//   letter: letter,
//   count: letterCount,
// }));
// return result;

// console.log(countStartingLetters(countries));

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const totalPrice = products
  .map((product) => parseFloat(product.price))
  .filter((price) => !isNaN(price))
  .reduce((sum, price) => sum + price, 0);

console.log(totalPrice); // Output: 27
