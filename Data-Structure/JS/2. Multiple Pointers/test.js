const findUniqueValue = function (arr) {
  if (arr.length < 2) return arr;
  let countPosition = 0
  let current = 0;

  while (current < arr.length) {
    if (arr[current] !== arr[countPosition]) {
      countPosition++;
      arr[countPosition] = arr[current];
    }
    current++;

  }
  return arr.slice(0, countPosition + 1);
}

console.log(findUniqueValue([1, 1, 1, 1, 5, 5]));
console.log(findUniqueValue([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]));
console.log(findUniqueValue([1, 2, 3, 4, 5, 6]));