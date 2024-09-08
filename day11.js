//destructing arrays : unpacking arrays

// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;
// console.log(numOne, numTwo, numThree);

// const numbers = [1, 2, 3];
// let [numone, numtwo, num3] = numbers;
// console.log(numone, numtwo, num3);
// const names = ["nitee", "kc", "brrok", "david", "french"];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const scientificConstants = [2.43, 2.98, 0.23, 7.89, 0.12, 0.23];
// let [e, pi, gravity, bodyTemp, boilingpoint] = scientificConstants;
// console.log(e, pi);

// const fullStack = [
//   ["HTML", "CSS", "JS", "REACT"],
//   ["nODE", "eXPRESS", "MONGODB"],
// ];
// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

const fullStack = [
  ["html", "css", "js", "react"][("node", "express", "mngodb")],
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}

// const fullStack = [
//   ["TML", "CSS", "REACT", "JS"],
//   ["MID", "LEVEL", "PROJECT"],
// ];
// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);
//to skip values
// const numbers = [1, 2, 3];
// let [numOne, , numThree] = numbers;
// console.log(numOne, numThree);

// const numbers1 = [3, 4, 5, 6, 7, 8, 9];
// const [num1, , num2] = numbers1;
// console.log(num1, num2);
// const names = ["Nitee", "brrok", "ben", "ten"];
// let [, secondperson, , fourthperson] = names;
// console.log(secondperson, fourthperson);

// we can use default values as well

// const names = [undefined, "Brook", "David", "niti"];
// let [firstPerson = "Nitee", secondPerson, thirdPerson = "ben", fourthPerson] =
//   names;

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums;

// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [
//   ["Finland", "Helinski"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// for (const [country, place] of countries) {
//   console.log(country, place);
// }

// const fullStack = [
//   ["HTML", "Css", "JS", "React"],
//   [("Node", "Express", "MongoDb")],
// ];
// for (const [first, second, third] of fullStack) {
//   console.log(first, second, third);
//   // for (const subArray of fullStack) {
//   //   console.log(...subArray);
// }

//Destructuring object
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

//renaming during structuring
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, height: h, area: a, perimeter: p } = rectangle;
// console.log(w, h, a, p);

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width = 100, height, area, perimeter = 60 } = rectangle;
// console.log(width, height, area, perimeter);

// const rect = {
//   width: 20,
//   height: 10,
// };
// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };
// console.log(calculatePerimeter(rect));

// const person = {
//   firstName: "Nitee",
//   lastName: "kc",
//   age: 20,
//   country: "Finland",
//   job: "Instructor",
//   skills: [
//     "HTML",
//     "CSS",
//     "JS",
//     "REACT",
//     "REDUX",
//     "NODE",
//     "MONGODB",
//     "PYTHON",
//     "D3.JS",
//   ],
//   languages: ["Ahraic", "English", "Sum", "Ftae"],
// };
// const getPersonInfo = (obj) => {
//   const skills = obj.skills;
//   const formattedSkills = skills.slice(0, -1).join(" ,");
//   const languages = obj.languages;
//   const formattedLanguages = languages.slice(0, -1).join(" ,");

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. he is ${age} years old.`;
// };

// const todoList = [
//   {
//     task: "Prepare Js Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Prepare rect Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Access result Test",
//     time: "4/1/2020 12:30",
//     completed: false,
//   },
// ];
// for (const { task, time, completed } of todoList) {
//   console.log(task, time, completed);
// }

// const names = [undefined, "brook", "david"];
// let [firstPerson = "Nitee", secondPerson, thirdPerson, fourthPerson = "John"] =
//   names;
// console.log(firstPerson, secondPerson);

const country = [
  ["Finland", "Helinski"],
  ["UK", "US", "CANADA"],
  ["Norway", "Oslo"],
];
for (const [coun, city] of country) {
  console.log(coun, city);
}

//destructuring object
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, height: h, area: a } = rectangle;
// console.log(w, h, a);

// const rect = {
//   width: 20,
//   height: 10,
// };
// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };
// console.log(calculatePerimeter(rect));

const person = {
  firstName: "Niti",
  lastName: "kc",
  age: 20,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "REDUX",
    "NODE",
    "MONGODB",
    "PYTHON",
    "D3.JS",
  ],
  languages: ["Amharic", "english", "suomi(finish)"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.join(" . ");
  const languages = obj.languages;
  const formattedLanguages = languages.join(" . ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

const countries1 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];
let [gem, fra, , ...nordicCountries] = countries1;
console.log(gem);
console.log(fra);
console.log(nordicCountries);

// const evens = [0, 2, 3, 5, 4, 8, 10];
// const evenNumbers = [...evens];

// const odds = [1, 3, 4, 5, 6, 2];
// const oddNumbers = [...odds];

// const wholeNumbers = [...evens, ...odds];
// console.log(wholeNumbers);

//Spread operator to copy object
const user = {
  name: "nitee",
  title: "programmer",
  country: "US",
  city: "Boston",
};
const copiedUser = { ...user };
console.log(copiedUser);

// Modifying or changing the object while copying
const user1 = {
  name: "Nitee",
  title: "Programmer",
  country: "Finland",
  city: "Helinski",
};
const copiedUser1 = { ...user, title: "instructor" };
console.log(copiedUser1);

//Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

// const sumAllNums = (...args) => {
//   console.log(args);
// };
// sumAllNums(1, 2, 3, 4, 5);

const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum = sum + num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5, 6));

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// countries.forEach(({ name, capital, population }) => {
//   console.log(`Name: ${name}`);
//   console.log(`Capital: ${capital}`);
//   console.log(`Population: ${population}`);
// });

//Values nikalna
// for (const { name, scores, skills, age } of users) {
//   console.log(name, scores, skills, age);

//   const keys = ["name", "scores", "skills", "age"];
//   console.log(keys);
// }
// }
// for (const user of users) {
//   const { name, scores, skills, age } = user;
//   console.log(users, scores, skills, age);

//   const keys = ["name", "scores", "skills", "age"];
//   console.log(keys);
// }

// const userswithlessskilss = users.filter((user) => user.skills.length < 2);
// console.log(userswithlessskilss);

// for (const [pi, ed, lm, temperatue, id] of constants) {
//   console.log(pi, ed, lm, temperatue, id);
// }

// let [ed, pi, temperature] = constants;
// console.log(ed, pi, temperature);

// let [fe, sw, den, nor, swt] = countries;
// console.log(fe, sw, den, nor, swt);

// const copiedUser = { ...rectangle };
// console.log(copiedUser);

// // Iterate through the users array and get all the keys of the object using destructuring

const [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = [
  "David",
  ["HTM", "CSS", "JS", "React"],
  [98, 85, 90, 95],
];

console.log(name, skills, jsScore, reactScore);

console.log(name, skills, jsScore, cssScore, reactScore);

const getPersonInfo1 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  // Format skills and languages
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  // Create the person info string
  const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo1;
};

// /Values nikalna
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);

  //   const keys = ["name", "scores", "skills", "age"];
  //   console.log(keys);
  // }
}
// for (const user of users) {
//   const { name, scores, skills, age } = user;
//   console.log(users, scores, skills, age);

//   const keys = ["name", "scores", "skills", "age"];
//   console.log(keys);
// }

const userswithlessskilss = users.filter((user) => user.skills.length < 2);
console.log(userswithlessskilss);

// for (const [pi, ed, lm, temperatue, id] of constants) {
//   console.log(pi, ed, lm, temperatue, id);
// }

// let [ed, pi, temperature] = constants;
// console.log(ed, pi, temperature);

// let [fe, sw, den, nor, swt] = countries;
// console.log(fe, sw, den, nor, swt);

// const copiedUser = { ...rectangle };
// console.log(copiedUser);

// // Iterate through the users array and get all the keys of the object using destructuring

// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// // console.log(name, skills, jsScore, reactScore);
// const [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
//   "David",
//   ["HTM", "CSS", "JS", "React"],
//   [98, 85, 90, 95],
// ];

console.log(name, skills, jsScore, cssScore, reactScore);
// Define person1 as an object
const person1 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

// Call the function with the person1 object
console.log(getPersonInfo1(person1));

// const events = [0, 1, 2, 3, 4, 5];
// const evenNumbers = [...evens];

// const odds = [2, 3, 4, 6, 1, 9, 0];
// const oddNumbers = [...odds];

// const wholeNumbers = [...evens, ...odds];
// console.log(wholeNumbers);

//spread operator to copy object
const user7 = {
  name: "niti",
  title: "programmer",
  country: "finland",
  city: "helinski",
};
const copiedUser2 = { ...user };
console.log(copiedUser2);
