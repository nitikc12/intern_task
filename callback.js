// A callback is a function passed as an argument to another function, which is then executed after some operation is completed. It allows you to specify code that should run after a task finishes, providing a way to handle asynchronous operations or customize behavior.

// function procesData(data, callback) {
//   console.log("Processing data:", data);
//   callback("Processed:" + data);
// }

// //callback function
// function displayResult(result) {
//   console.log("Result", result);
// }
// processData("Sample Data", displayResult);

//asynchronous callback
// function fetchData(callback) {
//   console.log("Fetching data...");

//   setTimeout(() => {
//     const data = "Fetched Data";
//     callback(data);
//   }, 2000);
// }
// function handleData(data) {
//   console.log("Data received:", data);
// }

function performOperation(a, b, callback) {
  const result = a + b;
  console.log("Operation result:", result);

  callback(result);
}
function operator(result) {
  console.log("multiplication:", result * 2);
}

performOperation(3, 4, operator);

// function greet(name, callback) {
//   console.log("hello," + name + "!");
//   callback();
// }

// function afterGreet() {
//   console.log("The  greeting  is complete");
// }
// greet("alice", afterGreet);

// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }
// console.log(cube(callback, 3));

// high order function
// const highOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(highOrder(2)(3)(10));

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

// const numbers1 = [6, 7, 89, 10, 11];
// const sumArray1 = (arr1) => {
//   let sum1 = 0;
//   const callback1 = function (element) {
//     sum1 += element;
//   };
//   arr1.forEach(callback1);
//   return sum1;
// };
// console.log(sumArray1(numbers1));

// //in simple way
// const numbers2 = [2, 3, 5, 7, 8, 9, 0];
// const sumArray2 = (arr) => {
//   let sum2 = 0;
//   arr.forEach(function (element) {
//     sum2 += element;
//   });
//   return sum2;
// };
// console.log(sumArray2(numbers2));

//setting time
// function sayHello() {
//   console.log("hello");
// }
// setTimeout(sayHello, 2000);

// function mainFunction(callback) {
//   console.log("performing operation");

//   setTimeout(function () {
//     callback("operation complete");
//   }, 1000);
// }

// function callbackFunction(result) {
//   console.log("Result:" + result);
// }
// mainFunction(callbackFunction);
// //
// function mainFunc(callback1) {
//   console.log("performed ");

//   setTimeout(function () {
//     callback1("completed");
//   }, 2000);
// }

// function callBackfunc(result1) {
//   console.log("result:" + result1);
// }
// mainFunc(callBackfunc);

// const mainFunction1 = (callback1) => {
//   setTimeout(() => {
//     callback1([2, 3, 4]);
//   }, 2000);
// };

// const adding = (arrays) => {
//   let sum = 0;
//   for (let i of arrays) {
//     sum += i;
//   }
//   console.log(sum);
// };
// mainFunction1(adding);
// //

// const mainFunction = (callback) => {
//   setTimeout(() => {
//     callback([2, 3, 4]);
//   }, 2000);
// };

// const add = (array) => {
//   let sum = 0;
//   for (let i of array) {
//     sum += i;
//   }
//   console.log(sum);
// };
// mainFunction(add);
