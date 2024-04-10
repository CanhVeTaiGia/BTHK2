
function hasUppercase(string){
    return string.split('').some(char => char.toUpperCase() === char);
}

console.log(hasUppercase("Hello")); 
console.log(hasUppercase("hello"));