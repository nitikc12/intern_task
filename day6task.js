// a = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(a + i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// n = 10;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// n = 7;
// for (let i = 1; i <= n; i++) {
//   console.log("#".repeat());
// }

// for (let i = 0; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i}  = ${i * i}  , ${i} * ${i}  = ${i * i * i}`);
// }

// let even = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) even.push(i);
// }
// console.log(even);

// let odd = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) odd.push(i);
// }
// console.log(odd);

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

// const newArr = [];
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(`The sum of numbers from 0 to 100 is ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from

// let sum = 0;
// let even = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even.push(i);
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let sum1 = 0;
// let even1 = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     even1.push(i);
//     sum1 = sum1 + i;
//   }
// }
// console.log(sum1);

// let result = [sum1, sum];
// console.log(result);

// const randomNumbers = [];
// for (let i = 0; i <= 10; i) {
//   const randomNumber = Math.floor(Math.random() * 200);
//   randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);

// Create an empty array to hold the random numbers
// const randomNumbers = [];

// // Loop 5 times to generate 5 random numbers
// for (let i = 0; i < 5; i++) {
//   //  number between 0 and 99
//   const randomNumber = Math.floor(Math.random() * 200);
//   // Add the random number to the array
//   randomNumbers.push(randomNumber);
// }

// // Output the array of random numbers
// console.log(randomNumbers);

// const randomNumbers = [];
// for (let i = 0; i <= 1; i++) {
//   const uuid = crypto.randomUUID(6);
//   randomNumbers.push(uuid);
// }
// console.log(randomNumbers);

// constRandomNumber = [];
// for (let i = 0; i <= 5; i++) {
//   const randomIndex = crypto.randomUUID(Math.random());
//   constRandomNumber.push(randomIndex);
// }
// console.log(constRandomNumber);

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toLowerCase());
}
console.log(newArr);

const check = [];
for (let i = 0; i < check.length; i++) {
  const result = countries.filter(countries.toUpperCase().includes("LAND"));
}
console.log(check);

// console.log(newArr);
// const lengths = [];
// for (let i = 0; i < countries.length; i++) {
//   lengths.push(countries[i].length);
// }
// console.log(lengths);

// const combinedArray = [];

// for (let i = 0; i < countries.length; i++) {
//   combinedArray.push({
//     name: countries[i].toUpperCase(),
//     length: countries[i].length,
//   });
// }

// console.log(combinedArray);
