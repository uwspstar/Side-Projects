const sortColor = function (arr) {
  if (arr.length < 2) return arr;

  const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] };

  const getTotalNum = (arr, num) => {
    let totalNum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) totalNum++;
    }
    return totalNum;
  }

  let totalNum0 = getTotalNum(arr, 0);
  let totalNum1 = getTotalNum(arr, 1);

  for (let i = 0; i < arr.length; i++) {
    i <= totalNum0 ?
      arr[i] = 0 : i <= totalNum0 + totalNum1 ?
        arr[i] = 1 : arr[i] = 2;
  }

  return arr;

}

let arr = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1];
console.log(sortColor(arr));