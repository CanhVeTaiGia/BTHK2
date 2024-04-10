function allPositiveNumbers(arr) {
  return console.log(arr.every((val) => {
    return val > 0
  }));
};
allPositiveNumbers([2, 4, 6, 8, 10]);
allPositiveNumbers([2, 4, 6, -8, 10]);