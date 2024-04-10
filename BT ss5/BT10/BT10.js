function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        var numA = Number(a);
        var numB = Number(b);
        if (isNaN(numA) || isNaN(numB)) {
            return "Invalid input";
        }
        else {
            return numA + numB;
        }
    }
    else {
        return "Invalid input";
    }
}
function subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        var numA = Number(a);
        var numB = Number(b);
        if (isNaN(numA) || isNaN(numB)) {
            return "Invalid input";
        }
        else {
            return numA - numB;
        }
    }
    else {
        return "Invalid input";
    }
}
function multiply(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        var numA = Number(a);
        var numB = Number(b);
        if (isNaN(numA) || isNaN(numB)) {
            return "Invalid input";
        }
        else {
            return numA * numB;
        }
    }
    else {
        return "Invalid input";
    }
}
function divide(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        else {
            return a / b;
        }
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        var numA = Number(a);
        var numB = Number(b);
        if (isNaN(numA) || isNaN(numB)) {
            return "Invalid input";
        }
        else {
            if (numB === 0) {
                return "Cannot divide by zero";
            }
            else {
                return numA / numB;
            }
        }
    }
    else {
        return "Invalid input";
    }
}
console.log(add(2, 3));
console.log(add("2", "3"));
console.log(add("2", "hello"));
console.log(subtract(5, 3));
console.log(subtract("5", "3"));
console.log(subtract("5", "hello"));
console.log(multiply(2, 3));
console.log(multiply("2", "3"));
console.log(multiply("2", "hello"));
console.log(divide(6, 3));
console.log(divide("6", "3"));
console.log(divide("6", "hello"));
console.log(divide(6, 0));
console.log(divide("6", "0"));
