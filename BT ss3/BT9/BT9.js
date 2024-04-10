function zip(...arrays) {
  const length = Math.min(...arrays.map((arr) => arr.length));
  const result = [];

  for (let i = 0; i < length; i++) {
    const item = [];
    for (const array of arrays) {
      item.push(array[i]);
    }
    result.push(item);
  }
  return result;
};
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [false, true, false];

const result = zip(arr1, arr2, arr3);
console.log(result);
