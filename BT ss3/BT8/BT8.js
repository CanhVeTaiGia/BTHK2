let arr1 = [1, 2, 3, 7, 8];
let arr2 = [4, 5, 6];
let index = 3;
function spliceArray(arr1, arr2, index) {
  if (index < 0 || index > arr1.length) {
    console.log("Vị trí không hợp lệ.");
  } else {
    arr1.splice(index, 0, ...arr2);
  }
  return arr1;
}
console.log(spliceArray(arr1, arr2, index));