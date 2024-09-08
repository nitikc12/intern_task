// const arr = ["html", "css", "js", "react", "node"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);

// const mixedDataTypes = ["niti", 1, "kc", 123, "hello"];
// console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "google",
  "twitter",
  "instagram",
  "mirosoft",
  "apple",
  "IBM",
  "oracle",
  "amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);
console.log(itCompanies[0]);
// console.log(itCompanies.indexOf("microsoft"));
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[4].toUpperCase());

let lastIndex = itCompanies.length - 1;
console.log(itCompanies[lastIndex]);
console.log(`${itCompanies} are big It companies`);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(2, 6));
console.log(itCompanies.splice(0, 1));

let cars = ["Benz", "Innova", "Breeza", "Etios", "Dzire"];
let new_cars = cars.slice(1, 4);
console.log("cars :", cars);
console.log("new_cars :", new_cars);
//splice(start, optional delete count, optional items to add)
const food = ["pizza", "cake", "salad", "cookie"];

food.splice(1, 0, "burrito");

console.log(food);
const food1 = ["pizza", "cake", "salad", "cookie"];

food1.splice(2, 2);
console.log(food1);
