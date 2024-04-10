function hasPrimeNumber(arr){
    return arr.every((item =>{
        return isPrime(item);
    }));
}

console.log(hasPrimeNumber([4, 6, 8, 9, 10]));
console.log(hasPrimeNumber([2, 3, 5, 7, 11]));

function isPrime(n){
    if(n < 2 || isNaN(n)) return;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};