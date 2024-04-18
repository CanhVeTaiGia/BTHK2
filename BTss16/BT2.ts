function swap<T>(arr: T[], a: number, b: number): T[]{
    let item = arr[a];
    arr[a] = arr[b];
    arr[b] = item;
    return arr
}
console.log(swap([1, 2, 3, 4, 5], 2, 3));
