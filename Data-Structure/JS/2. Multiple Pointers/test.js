const reverseStr = function (str) {
  // O(n)
  if (str.length < 2) return str;

  const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };
  
  let arr = str.split('');
  let i = 0;
  let j = arr.length;

  while (i < j) {
      swap(arr, i, j);
      i++;
      j--;
  }
  
  return arr.join('');
}

console.log(reverseStr("abcde"))
console.log(reverseStr("abcdef"))