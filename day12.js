// //regular expressions
// //A regular expression (regex) is a way to describe patterns in text.

// const getPersonInfo1 = ({
//   firstName,
//   lastName,
//   age,
//   country,
//   job,
//   skills,
//   languages,
// }) => {
//   // Format skills and languages
//   const formattedSkills = skills.slice(0, -1).join(", ");
//   const formattedLanguages = languages.slice(0, -1).join(", ");

//   // Create the person info string
//   const personInfo1 = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

//   return personInfo1;
// };

// // Define person1 as an object
// const person1 = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };

// // Call the function with the person1 object
// console.log(getPersonInfo1(person1));

// try {
//   let lastName = "niti";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.log(err);
// }

// try {
//   let lastName = "kc";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.error(err);
// } finally {
//   console.log("In any case it will executr");
// }

// try {
//   let lastName = "nitee";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.log("Name  of the error, err .name");
//   console.log("error message", err.message);
// } finally {
//   console.log("In any case i will executed ");
// }

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number:");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();
