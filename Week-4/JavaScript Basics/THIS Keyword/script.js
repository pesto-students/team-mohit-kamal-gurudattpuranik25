// class Person
class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  // introduce method
  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am an ${this.nationality}.`;
  }
}

// instances of Person class
const person_1 = new Person("Neha", 24, "Female", "Indian");
const person_2 = new Person("Kumar", 89, "Male", "American");
const person_3 = new Person("Suresh", 45, "Male", "Italian");

console.log(person_1.introduce());
console.log(person_2.introduce());
console.log(person_3.introduce());

// inheritance
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    // super -> reference variable to parent class
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  // study method
  study() {
    return `I am studying ${this.subject}.`;
  }
}

// instance of study class
const student_1 = new Student("Priyanka", 23, "Female", "Indian", "Maths");

console.log(student_1.introduce() + " " + student_1.study());
