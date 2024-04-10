"use strict";
let students = [
    { id: 1, name: "An", class: "11A4" },
    { id: 2, name: "Linh", class: "12A4" },
    { id: 3, name: "Anh", class: "10A1" },
];
function getstudentsByClass(students, className) {
    return students.filter(student => student.class === className);
}
let studentInClass = getstudentsByClass(students, "11A4");
console.log(studentInClass);
