// class Person {}
// const person = new Person();
// console.log(person);

class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }
}

const person1 = new Person("Nitee", "kc");
console.log(person1);
