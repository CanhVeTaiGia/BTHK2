type A = {
    name: string
}
type B = {
    id: number
}

let person1: A = {name: "Hải"};
let person2: B = {id: 1};

function combineObj(person1:A, person2:B):any{
    type C = A & B;
    let person3: C = {
        name: person1.name,
        id: person2.id
    }
    return person3
}

console.log(combineObj(person1, person2));