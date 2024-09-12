// function hello() {
//   console.log("hello");
// }

// console.log("one");
// setTimeout(() => {
//   console.log("hello");
// }, 2000); //timeout

// console.log("three");

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, sum);

// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000);

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }
// getData();

//data1
//data2
//data3
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     if (getNextData) {
//       getNextData();
//     }
//     console.log("data", dataId);
//   }, 2000);
// }

//callback hell : nested callback stacked below one another like this
// getData(1, () => {
//   //to execute our callback
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

//to solve callback hell we use promises

//promises : eventual completion of task
//promises : 1 is pending state , 2 is fulfilled state, 3 is rejected state

let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve(123);
  reject("error");
});
