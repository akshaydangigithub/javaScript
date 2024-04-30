// Today's topic

// 1. Arrow function
// 2. Constructor function

// ======================= Arrow function =======================

// function abc(){
//     console.log("wkidnwd")
// }

// abc();

// let sum = (a, b, c) => {
//   return console.log(a + b + c);
// };

// sum(3, 4, 5);

// ========================= Constructor function old js =======================

// class Student{
//     constructor(mark,subject){
//         this.mark = mark;
//         this.subject = subject
//     }
// }

// let student1 = new Student(100,"Math")
// let student2 = new Student(32, "Science")
// console.log(student1)
// console.log(student2)

// getter

// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   get fullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// let person1 = new Person("Akshay", "Dangi", 21);
// console.log(person1);
// console.log(person1.fullName)

// setter

// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   set setPersonalInfo(data) {
//     let { age, fname } = data;
//     this.age = age;
//     this.fname = fname;
//   }
// }

// let person1 = new Person("Akshay", "Dangi", 21);

// person1.setPersonalInfo = { age: 100, fname: "Ak" };
// console.log(person1);

// ========================= Constructor function new js =======================

function Person(age, name) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name + " " + this.age;
  };

  this.setName = function (name, age) {
    this.name = name;
    this.age = age;
  };
}

let person1 = new Person(21, "Akshay");
// console.log(person1)
// console.log(person1.getName())
person1.setName("AK", 100);
console.log(person1);
