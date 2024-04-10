let person = [
  { id: 1, name: "Alice", hobbies: ["Reading", "Drawing"] },
  { id: 2, name: "Bob", hobbies: ["Gaming", "Cooking", "Reading"] },
];
let hobbies = [];
person.map((item) =>{
    hobbies.push(...item.hobbies);
});
let mySet = new Set(hobbies);
console.log(mySet);