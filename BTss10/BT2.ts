class Student{
    id: number;
    age: number;
    email: string;
    constructor(id: number, age:number, email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let students: Student[] = [];

students.push(new Student(1, 20, 'vy@gmail.com'));
students.push(new Student(2, 18, 't@gmail.com'));

for (let student of students) {
  console.log(student);
}