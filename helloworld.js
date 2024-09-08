/*let name = "niti",
  job = "no job",
  live = "Finland";
console.log(name, job, live);*/

//template literals
/*myAge = 20;
YourAge = 30;
console.log(`I am ${myAge} years old. You are $(YourAge)`);*/

/*let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen); //math.floor rounds down
console.log(randomNumRoundToFloor);*/

let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);
/*let challenge = "30 Days Of JavaScript";
console.log(challenge.length);
console.log(challenge.toUpperCase());*/

/* \n : new line
\t : means 8 spaces
\\: back slash
\': single quote(')
\": double quote

*/

// console.log(Math.pow(3, 4));

// let string = "JavaScript";
// console.log(string.substr(4, 6));

// let country = "Finland";
// console.log(country.substring(0, 1)); // Fin
// console.log(country.substring(3, 7)); // land
// console.log(country.substring(3));

let string1 = "30 Days Of JavaScript";
console.log(string1.replace("JavaScript", "Python")); //*/
console.log(string1.substring(2, 21));
console.log(string1.includes("Script"));
console.log(string1.split());
console.log(string1.split(" "));
// /*let string = "30 Days Of JavaScript";
console.log(string1.charAt(0));
// */
console.log(string1.charAt(15));
console.log(string1.charCodeAt(3));
console.log(string1.indexOf("Java"));
console.log(string1.lastIndexOf("JavaScript"));

let string2 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string2.search("love"));

let string3 = "   30 Days Of JavaScript  ";
console.log(string3.trim());
console.log(string3.startsWith(" "));
console.log(string3.endsWith(0));

// let name = "30 Days of";
// let name1 = "Javascript";
/*let fullName = firstName + space + lastName;
let personInfoOne = fullName + ". I am " + age + ". I live in " + country;*/

//let fullName1 = name + name1;
//console.log(fullName1);

let string4 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string4.lastIndexOf("love")); // 67

let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
console.log(result);

let text3 = "The rain in SPAIN stays mainly in the plain";
let result3 = text3.match("/ain/g");
console.log(result3);

let string_3 = "   30 Days Of JavaScript  ";
console.log(string_3.trim());
console.log(string_3.startsWith(" "));
console.log(string_3.endsWith(0));

// alert(message);
// alert("Welcome to 30daysof js");
// console.log(alert);

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  console.log("Hello " + person + "! How are you today?");
}

const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box
