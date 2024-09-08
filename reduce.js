// const arr = [2, 3, 5, 6, 7, 8];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

//reduce
// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

const children = [
  { name: "nitee", scores: [{ maths: 78, science: 82, english: 71 }] },
  { name: "vixen", scores: [{ maths: 90, science: 74, english: 72 }] },
  { name: "Charlie", scores: [{ maths: 29, science: 81, english: 90 }] },
  { name: "Jacky", scores: [{ maths: 5, science: 28, english: 65 }] },
];

const Students = children.map((marks) => {
  const scores = marks.scores[0];
  const books = Object.values(scores);
  const totalMarks = books.reduce((sum, subject) => {
    sum + subject;
  }, 0);
  const percentage = (totalMarks / (books.length * 100)) * 100;

  let result = books.every(() => scores >= 40) ? "Pass" : "Fail";

  return {
    name: marks.name,
    scores: scores,
    result: result,
    percentage: percentage,
  };
});
console.log(Students);
