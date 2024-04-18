function flatFunc<T>(a: T[]): T[] {
    if (a.some(x => Array.isArray(x))) {
        return flatFunc(a.flatMap(x => x));
    } else {
        return a;
    }
}
console.log(flatFunc([1, [2, [3, 4], 5], 6]));