const twoSum = function (arr, target) {
    let mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
      if(mySet.has(target - arr[i])) return true;
      mySet.add(arr[i]);
    }
    return false;
  }
  console.log(twoSum([-1, 7, 11, 15], 14));
  console.log(twoSum([-1, 7, 11, 15], 13));
  console.log(twoSum([2, 7, 11, 15], 13)); 

  const twoSum = function (arr, target) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        let num = target - arr[i];
        if (set.has(num))  return true;
        set.add(arr[i]);
    }
    return false;
}