// class Person {}
// const person = new Person();
// console.log(person);

// class Person {
//   constructor(firstName, lastName, middleName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.middleName = middleName;
//   }
// }

// const person1 = new Person("Nitee", "kc");
// console.log(person1);

//once we create a class we can create many object using the class

// class Person {
//   constructor(firstName, lastName) {
//     // console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const person1 = new Person("Nitee", "kc");
// const person2 = new Person("Jeniffer", "tekle");
// const person3 = new Person("Abraham", "Niti");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }
// const person1 = new Person("niti", "kc", 20, "finland", "ktm");
// console.log(person1);

// class Person {
//   constructor(
//     firstName = "niti",
//     lastName = "kc",
//     age = 20,
//     country = "finland",
//     city = "ktm"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const person1 = new Person();
// const person2 = new Person("nitee", "kc", 20, "finland");

// console.log(person1);
// console.log(person2);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const person1 = new Person("niti", "kc", 20, "finland", "helinski");
// console.log(person1);

//class methods
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// console.log(person1.score);
// console.log(person2.score);

// console.log(person1.skills);
// console.log(person2.skills);

//get
//The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value.

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
// }

// const person1 = new Person("nitee", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("lidiya", "tekle", "ko", 20, "lm");

// console.log(person1.getSkills);
// console.log(person2.getSkills);

//setter

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }

//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }

//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// person1.setScore = 1;
// person1.setSkill = "HTML";
// person1.setSkill = "CSS";
// person1.setSkill = "Javascript";

// person2.setScore = 1;
// person2.setSkill = "Planning";
// person2.setSkill = "Managing";
// person2.setSkill = "Organizing";

// console.log(person1.score);
// console.log(person2.score);

// console.log(person1.skills);
// console.log(person2.skills);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(" ,") +
//         `and ${this.skills[this.skills.length - 1]}`;
//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// const person3 = new Person("John", "Doe", 50, "Mars", "Mars city");

// person1.setScore = 1;
// person1.setSkill = "HTML";
// person1.setSkill = "CSS";
// person1.setSkill = "JavaScript";

// person2.setScore = 1;
// person2.setSkill = "Planning";
// person2.setSkill = "Managing";
// person2.setSkill = "Organizing";

// console.log(person1.getScore);
// console.log(person2.getScore);

// console.log(person1.getSkills);
// console.log(person2.getSkills);
// console.log(person3.getSkills);

// console.log(person1.getPersonInfo());
// console.log(person2.getPersonInfo());
// console.log(person3.getPersonInfo());

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(" ,") +
        `and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static favouriteSkill() {
    const skills = ["html", "css", "js", "react", "python"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}
console.log(Person.favoriteSkill());
