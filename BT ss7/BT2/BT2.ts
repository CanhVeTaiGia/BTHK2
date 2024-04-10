// 1. Array có thể có bất kỳ số lượng phần tử nào của cùng một kiểu, trong khi Tuple có số lượng phần tử cố định với các kiểu cụ thể.
// 2. Phần tử Array có thể được truy cập bằng chỉ số, trong khi phần tử Tuple có thể được truy cập bằng vị trí của chúng trong Tuple
let array: number[] = [1, 2, 3];
let tuple: [number, string] = [1, 'hello'];
console.log(array[0]);
console.log(tuple[0]);
array.push(4);
tuple.push(2);
console.log(array.length);
console.log(tuple.length);
// Array có thể có bất kỳ số lượng phần tử nào của cùng một kiểu, trong khi Tuple có số lượng phần tử cố định với các kiểu
