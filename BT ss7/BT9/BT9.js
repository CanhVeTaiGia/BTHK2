"use strict";
function isPrime(n) {
    if (n >= 2) {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
function areAllPrime(arr) {
    console.log(arr.every((value) => isPrime(value)));
}
areAllPrime([1, 3, 4, 2, 7, 9, 32, 43, 12, 45]);
areAllPrime([3, 5, 7, 11, 13]);
