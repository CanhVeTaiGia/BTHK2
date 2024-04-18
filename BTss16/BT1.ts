function returnSameValue<T>(a: T): T{
    return a;
}

console.log(returnSameValue("h"))
console.log(returnSameValue(2))
console.log(returnSameValue([1]))