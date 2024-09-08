// a = "Javascipt";
// b = 10;
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     let a = "Python";
//     let b = 100;
//     console.log(a, b);
//   }
// }
// console.log(a, b);
// letsLearnScope();
// console.log(a, b);

// let is block level
//var is global
//function scope is inside a function

// const person = {
//   firstName: "Niti",
//   lastName: "kc",
//   age: 20,
//   country: "nepal",
//   skills: ["HTML", "CSS", "JS", "REACT", "NODE", "MONGO DB"],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
// };

// person.nationality = "Nepali";
// person.country = "Nepal";
// (person.title = "teacher"), person.skills.push("meteor");
// person.skills.push("sass");

// person.isMarried = true;
// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.getFullName()); // Outputs: Niti kc

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 3)
//     .join(", ");
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };

// console.log(person);
// console.log(person.getPersonInfo());

// const person = {
//   firstName: "niti",
//   age: 20,
//   country: "nepal",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "ktm",
//     pobox: 2002,
//     city: "helinski",
//   },
//   getpersonInfo: function () {
//     return ` I am ${this.firstName} and I live in this ${this.city} , ${this.country}. I am ${this.age}.`;
//   },
// };

// const copyPerson = Object.assign(person);
// console.log(copyPerson);
// console.log(copyPerson.hasOwnProperty("name"));

// const keys = Object.keys(copyPerson);
// console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address);
// console.log(address); //['street', 'pobox', 'city']

// const dog = {
//   name: " benzi",
//   legs: 4,
//   color: "brown",
//   age: 3,
//   barkproperty: "woof woof",
// };

// dog.breed = "cocker spaniel";

// dog.getdogInfo = function () {
//   return ` I am ${this.name} and i have ${this.legs} , i am ${color}. I am ${this.age}.`;
// };

// const printDog = Object.assign(dog);
// console.log(printDog);
// console.log(dog.barkproperty);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// const loggedInCount = Object.values(users).filter(
//   (user) => user.isLoggenIn
// ).length;
// console.log(`Number of logged in users: ${loggedInCount}`);

// Get an array of user objects
const userArray = Object.values(users);

// Filter to find logged-in users
const loggedInUsers = userArray.filter((person) => person.isLoggedIn);

// Count the number of logged-in users
const loggedInCount = loggedInUsers.length;

// Output the result
console.log(`Number of logged in users: ${loggedInCount}`); // Should output 2

const userCount = Object.values(users);
const moreInusers = userCount.filter((count) => count.points >= 50);
const more = moreInusers.length;
console.log(more);

const updatedUsers = { ...users };

// Adding your name
updatedUsers.Niti = {
  email: "nituname@yourdomain.com",
  skills: ["html", "css"],
  age: 20,
  isLoggedIn: true,
  points: 60,
};

console.log(updatedUsers);

const keys = Object.keys(users);
console.log(keys);

const values = Object.values(users);
console.log(values);
