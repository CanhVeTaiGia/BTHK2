"use strict";
let person1 = { name: "Hải" };
let person2 = { id: 1 };
function combineObj(person1, person2) {
    let person3 = {
        name: person1.name,
        id: person2.id
    };
    return person3;
}
console.log(combineObj(person1, person2));
