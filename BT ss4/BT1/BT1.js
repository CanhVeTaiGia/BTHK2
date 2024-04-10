function sum(a){
    let sum = 0
    for (const key of a) {
        if(key % 2 === 0){
            sum += key
        }
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6]));