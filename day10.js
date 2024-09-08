// const languages = [
//   "Englsih",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const setOfLanguages = new Set(languages);
// console.log(setOfLanguages);

// const Array = [
//   "apple",
//   "mango",
//   "banana",
//   "litchi",
//   "strawberry",
//   "avocado",
//   "pie",
//   "pie",
// ];
// const setOfFruits = new Set(Array.slice(0, 5));
// console.log(Array);

// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const setOfLanguages = new Set(languages);
// for (const language of setOfLanguages) {
//   console.log(language);
// }

//adding element to set
// const companies = new Set();
// console.log(companies.size);

// companies.add("Google");
// console.log(companies);

//adding elements using loop in set
// const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
// setOfCompanies = new Set();
// for (const company of companies) {
//   setOfCompanies.add(company);
//   companies.length = 0; // This will clear the array
//   console.log(companies);
//   console.log(setOfCompanies.delete("Google"));
//   console.log(setOfCompanies);
//}

// const companies = [
//   "Google",
//   "fb",
//   "maxon",
//   "oracle",
//   "amazon",
//   "amazon",
//   "apple",
// ];
// setOfCompanies = new Set();
// for (const company of companies) {
//   setOfCompanies.add(company);
//   console.log(company);
// }
// // console.log(setOfCompanies);
// // console.log(setOfCompanies.delete("Google"));
// // console.log(setOfCompanies.size);

// // console.log(setOfCompanies.has("apple"));
// setOfCompanies.clear();
// console.log(setOfCompanies);

// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const langSet = new Set(languages);
// console.log(langSet);
// console.log(langSet.size);

// const counts = [];

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ langSet: l, count: filteredLang.length });
// }
// console.log(counts);

// const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
// const setOfNumbers = new Set(numbers);
// console.log(setOfNumbers);
// const numberCount = [];
// for (const n of setOfNumbers) {
//   const filteredNum = numbers.filter((nlg) => nlg === n);
//   console.log(filteredNum);
//   numberCount.push({ langSet: n });
// }
// console.log(numberCount);

//union of sets
// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = [3, 5, 6, 7, 3, 2, 5];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// // let C = new Set(c);

// // console.log(C);

// //intersection of sets
// let a = [1, 2, 3, 4, 5, 6];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));

// let C = new Set(c);
// console.log(C);

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C);

// let a = [1, 2, 3, 4, 5, 6];
// let b = [3, 4, 5, 6];
// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => !B.has(num));
// let C = new Set(c);
// console.log(C);

//map
// const map = new Map();
// console.log(map);

// countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

//Adding values to the map
// const countriesMap = new Map();
// console.log(countriesMap.size);
// countriesMap.set("Finland", "Helinski");
// countriesMap.set("Sweden", "Stockholm");
// countriesMap.set("Norway", "Oslo");

// console.log(countriesMap.get("Finland"));
// console.log(countriesMap.has("Finland"));
// console.log(countriesMap);

// for (const country of countriesMap) {
//   console.log(country);
// }

// const empty = new Set();

// for (let i = 0; i < 10; i++) {
//   empty.add(i);
// }

// // console.log(empty.delete(2));
// console.log(empty.clear());
// console.log(empty);

//Create a map of countries and number of characters of a country

// const countries = [
//   "United States",
//   "Canada",
//   "Brazil",
//   "United Kingdom",
//   "Germany",
//   "France",
//   "Italy",
//   "Spain",
//   "Australia",
//   "Japan",
// ];

// const countryMap = new Map();

// countries.forEach((country) => {
//   countryMap.set(country, country.length);
// });
// console.log(countryMap);

// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);

// const countries = [
//   { country: "USA", languages: ["English"] },
//   { country: "France", languages: ["French"] },
//   { country: "Spain", languages: ["Spanish"] },
//   { country: "China", languages: ["Chinese"] },
//   { country: "Brazil", languages: ["Portuguese"] },
//   { country: "Russia", languages: ["Russian"] },
//   { country: "Netherlands", languages: ["Dutch"] },
//   { country: "Germany", languages: ["German"] },
//   { country: "Kenya", languages: ["English"] },
//   { country: "South Africa", languages: ["Afrikaans"] },

// ];

// // Function to find the most spoken languages
// function mostSpokenLanguages(countries, topN) {
//   const languageCount = {};

//   // Count the occurrences of each language
//   countries.forEach((country) => {
//     country.languages.forEach((language) => {
//       if (languageCount[language]) {
//         languageCount[language]++;
//       } else {
//         languageCount[language] = 1;
//       }
//     });
//   });

//   // Convert to an array of objects and sort by count
//   const sortedLanguages = Object.entries(languageCount)
//     .map(([language, count]) => ({ country: language, count }))
//     .sort((a, b) => b.count - a.count);

//   // Return the top N languages
//   return sortedLanguages.slice(0, topN);
// }

// // Example usage
// console.log(mostSpokenLanguages(countries, 10));
// console.log(mostSpokenLanguages(countries, 3));

// const items = [
//   { name: "Apple", price: 1 },
//   { name: "Orange", price: 2 },
//   { name: "Mango", price: 3 },
// ];

// let totalPrice = 0;

// items.forEach((item) => {
//   totalPrice += item.price;
// });

// console.log(totalPrice); // 6

// let totalMarks = 0;

//   for (let i = 0; i < subjects.length; i++) {
//     const subject = subjects[i];
//     totalMarks += scores[subject];
//   }
// const students = [
//   { name: "Alice", scores: [{ maths: 90, science: 80, english: 79 }] },
//   { name: "Bob", scores: [{ maths: 92, science: 78, english: 71 }] },
//   { name: "Charlie", scores: [{ maths: 29, science: 8, english: 90 }] },
//   { name: "Jack", scores: [{ maths: 56, science: 28, english: 65 }] },
// ];

// const processedStudents = students.map((student) => {
//   const scores = student.scores[0]; // taking the scores object
//   const subjects = Object.keys(scores);
//   const totalMarks = subjects.reduce(
//     (sum, subject) => sum + scores[subject],
//     0
//   );
//   const percentage = (totalMarks / (subjects.length * 100)) * 100;

//   const result = subjects.every((subject) => scores[subject] >= 40)
//     ? "Pass"
//     : "Fail";

//   return {
//     name: student.name,
//     scores: scores,
//     result: result,
//     percentage: percentage.toFixed(2), // Format percentage to two decimal places
//   };
// });

// console.log(processedStudents);

// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const langSet = new Set(languages);
// console.log(langSet);
// console.log(langSet.size);

// const counts = [];

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);

// countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

const countriesMap = new Map();
console.log(countriesMap.size);
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
console.log(countriesMap);
console.log(countriesMap.size);
console.log(countriesMap.has("Finland"));

for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
