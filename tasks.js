// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

const maxnumber = 10;
for (let i = 0; i <= maxnumber; i = i + 2) {
  console.log(i);
}

// 2. Print a table containing multiplication tables
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?
// create a function generateTable(multiplicationNumberFor){}

function generateTable(multiplicationNumberFor) {
  for (let i = 1; i <= 10; i++) {
    // for (let j = 1; j <= 10; j++) {
    //yo inner loop ho
    // console.log(i + " X " + j + "=" + i * j);
    console.log(
      `${multiplicationNumberFor} X ${i} = ${multiplicationNumberFor * i}`
    );
  }
}
const multiplicationNumberFor = 5;
generateTable(multiplicationNumberFor);

// 3. Create a length converter function
// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

function lengthConverter(kilometers) {
  const conversion = 0.621371;
  return kilometers * conversion;
}

const kilometers = 10;
const miles = lengthConverter(kilometers);
console.log(`${kilometers} km is equal to ${miles} miles.`);

// 5. Create a function that reverses an array
// This challenge is particularly helpful if you’re planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you’re working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
// rewrite you own code than using js methods
function reverseArray(numbers) {
  return numbers.reverse();
}
function reverseArray(numbers) {
  let reversed = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
  }

  return reversed;
}

const array = [1, 2, 3, 4, 5];
// const reversedArray = rever
const reversedArray = reverseArray(array);
console.log(reversedArray);

//sort
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

const intArray = [5, 3, 8, 1, 2];
console.log(sortArray(intArray));

//filter
function filterOut(arr) {
  return arr.filter((number) => number >= 0);
}
const array3 = [-1, -2, 3, 4, 5, 6, 7, -10];
console.log(filterOut(array3));

//sum of numbers in a array
function sumArray(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
const array1 = [1, 2, -3, -4, 3];
console.log(sumArray(array1));

// //largest number in array
// own function
function largestNumber(number) {
  return Math.max(...number);
}
const a1 = [1, 4, 7, 9, 0, 2];
console.log(largestNumber(a1));

function findLargestNumber(array) {
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
const a = [19, 2, 3, 2, 4, 5, 8, 0];
console.log(findLargestNumber(a));

//
function DivisibleBy10(num) {
  return num % 10 === 0;
}
let b = 10;
console.log(DivisibleBy10(b));

//space remove
function spaceRemove(remove) {
  return c.trim();
}
let c = "   niti    kn";
console.log(spaceRemove(c));

// 10. Return the number of vowels in a string
// Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters

function countVowels(str) {
  let count = 0;

  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("niteelo"));
console.log(countVowels("pkl"));
// 12. Check if a string is a palindrome
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly.

function isPalindrome(str) {
  let j = str.length - 1; //else last character bata start garcha
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    } else {
      i = j;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));

function reverse(array) {
  let output = [];
  for (i = array.length - 1; i >= 0; i--) {
    output.push(array.pop());
  }

  return output;
}
const originalarray = [12, 3, 4, 5, 6, 7];
const reversearray = reverse(originalarray);
console.log(reversearray);
// reverse = [12, 3, 4, 5, 6, 6];
// console.log(reverse);

function reverseValue(values) {
  let newarray = [];
  for (i = values.length - 1; i >= 0; i--) {
    newarray.push(values.pop());
  }
  return newarray;
}
const outputarray = [2, 3, 4, 5, 6, 2.3, 10, 100, 122, 1333];
const reversing = reverseValue(outputarray);
console.log(reversing);
