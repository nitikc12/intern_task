//array
// const numbers = [0, 2, 4, 6, 1, 10, 11, 12, 56];
// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// let js = "JavaScript";
// const charsInJavaScript = js.split("");

// console.log(charsInJavaScript);

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// const companies = companiesString.split(",");
// console.log(companies);

// //using split
// let java = "Javascript";
// const char = java.split;
// console.log(char);

// const fruits = ["banana", "orange", "avocado", "strawberry"];
// let firstfruit = fruits[0];
// console.log(firstfruit);
// let second = fruits[1];
// console.log(second);

// let lastIndex = fruits.length - 2;
// lastFruit = fruits[lastIndex];
// console.log(lastFruit);

// const webTechs = ["html", "css", "js", "react", "redux", "node"];

// console.log(webTechs.length);
// console.log(webTechs[0]);
// console.log(webTechs[4]);
// webTechs[0] = "niti";
// console.log(webTechs);
// let lastIndex1 = webTechs.length - 1;
// console.log(webTechs[lastIndex]);

// const numbers1 = [1, 2, 3, 4, 5];
// numbers1[0] = 10;
// numbers1[1] = 20;
// console.log(numbers1);

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
// countries[0] = "nepal";
// let lastIndex2 = countries.length - 1;
// countries[lastIndex] = "nepal";
// console.log(countries);

//array constructor
// const arr = Array();
// console.log(arr);

// const eightEmptyValues = Array(8).fill("X");
// console.log(eightEmptyValues);

// const fourEmptyValues = Array(8).fill("4");
// console.log(fourEmptyValues);

// //array concatenation
// // const firstList1 = [1, 2, 3, 4, 5, 6];
// // const secondList1 = [4, 5, 6, 7, 8];
// // const thirdList = firstList1.concat(secondList1);
// // console.log(thirdList);

// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.length);

// //to check if it exixts in array
// // const numbers1 = [1, 2, 3, 5, 45, 67];
// // console.log(numbers1.indexOf(5));

// //check if element exists in an array
// const fruits1 = ["banana", "orange", "mango", "lemon"];
// let index = fruits1.indexOf("banana");
// if (index === -1) {
//   console.log("The fruit does not exist");
// } else {
//   console.log("This fruit does exist");
// }

// let indexAvocado = fruits1.indexOf("avocado");
// if (indexAvocado === -1) {
//   console.log("This fruit does not exist ");
// } else {
//   console.log("This fruit does exist in the ");
// }

// const numbers4 = [1, 2, 3, 4, 5, 6, 32, 1, 23, 5, 2];
// console.log(numbers4.lastIndexOf(2));

// const numbers5 = [1, 2, 4, 5, 3, 2, 1, 6, 8];
// console.log(numbers5.includes(6));

// const webTechs1 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongoDB"];
// console.log(webTechs1.includes("Node"));

// //checking array
// const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(numbers6));

// //array to string
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString());

// const names = ["Aniya", "niti", "kc", "elias", "brrok"];
// console.log(names.toString());

// //joining array elements
// const numbers7 = [1, 2, 3, 4, 5, 6];
// console.log(numbers.join());

// const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names1.join());
// console.log(names1.join(" "));
// console.log(names1.join(", "));
// console.log(names1.join(" # "));

// //slicing
// const numbers8 = [1, 2, 3, 4, 5];
// console.log(numbers8.slice());
// console.log(numbers.slice(1, 4));

// //splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// const numbers9 = [1, 2, 3, 4, 5];
// numbers.splice();
// console.log(numbers9);

// const numbers10 = [1, 2, 3, 4, 5, 6, 7, 7];
// numbers10.splice(0, 1);
// console.log(numbers10);

// const numbers11 = [1, 2, 3, 4, 5, 6, 3, 2, 1];
// numbers11.splice(3, 3, 7, 8, 9);
// console.log(numbers11.splice(3, 3, 7, 8, 9));

// console.log([3] == [3], "yesko output k aucha?");

const arr = ["item1", "item2", "item3"];
arr.push("new item");
console.log(arr);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(6); //adds numbers at the end
console.log(numbers);

numbers.pop(); //removes no from end
console.log(numbers);

let fruits = ["banana", "orange", "mango", "lemon"];
fruits.push("apple");
console.log(fruits);

const numbers1 = [1, 2, 3, 4, 5];
numbers1.pop();
console.log(numbers1);

//shift: removes one item from the beginning
const numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.shift();
console.log(numbers2);

//unshift : adding array element at the beginning
const numbers3 = [1, 2, 34, 4, 5, 3, 2, 90, 1];
numbers3.unshift(5);
console.log(numbers3);

//reverse
const numbers4 = [1, 2, 3, 4, 2, 1, 6, 9];
numbers4.reverse();
console.log(numbers4);

//sorting: arraging in ascending order
const webTechs = ["HTML", "CSS", "JS", "React", "Node", "MongoDb"];
webTechs.sort();
console.log(webTechs);
webTechs.reverse();
console.log(webTechs);
