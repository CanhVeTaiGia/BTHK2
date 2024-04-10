const employees = [
  {
    name: "Nguyễn Văn A",
    age: 21,
  },
  {
    name: "Nguyễn Văn B",
    age: 30,
  },
  {
    name: "Nguyễn Văn C",
    age: 19,
  },
];

function increase(employees){
  return employees.slice().sort((a, b) => a.age - b.age);
}
function decrease(employees){
  return employees.slice().sort((a, b) => b.age - a.age);
}
console.log(increase(employees));
console.log(decrease(employees));