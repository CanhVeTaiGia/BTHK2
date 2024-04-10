"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
students.push(new Student(1, 20, 'vy@gmail.com'));
students.push(new Student(2, 18, 't@gmail.com'));
for (let student of students) {
    console.log(student);
}
