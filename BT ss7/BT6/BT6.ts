// 1. Array có thể có bất kỳ số lượng phần tử nào của cùng một kiểu, trong khi Tuple có số lượng phần tử cố định với các kiểu cụ thể.
// 2. Phần tử Array có thể được truy cập bằng chỉ số, trong khi phần tử Tuple có thể được truy cập bằng vị trí của chúng trong Tuple
let array1: number[] = [1, 2, 3];
let tuple1: [number, string] = [1, 'hello'];
console.log(array1[0]);
console.log(tuple1[0]);
array1.push(4);
tuple1.push(2);
console.log(array1.length);
console.log(tuple1.length);
// Array có thể có bất kỳ số lượng phần tử nào của cùng một kiểu, trong khi Tuple có số lượng phần tử cố định với các kiểu
