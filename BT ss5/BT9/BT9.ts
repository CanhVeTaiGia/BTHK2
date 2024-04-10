<<<<<<< HEAD
let myString1: string = "banana";
let myString2: string = "hello world";

let uniqueString1 = myString1.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
}).join('');
let uniqueString2 = myString2.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
}).join('');

console.log(uniqueString1);
=======
let myString1: string = "banana";
let myString2: string = "hello world";

let uniqueString1 = myString1.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
}).join('');
let uniqueString2 = myString2.split('').filter((value, index, self) => {
    return self.indexOf(value) === index;
}).join('');

console.log(uniqueString1);
>>>>>>> 532a7b149d1d0c8192e6caf2905b771ee097e7b2
console.log(uniqueString2);