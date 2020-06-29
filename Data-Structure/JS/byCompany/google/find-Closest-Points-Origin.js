/*
Given a list of points and a number k, find the k closest points to the origin.

findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)
// [[-1, -1], [1, 1], [2, 2]]

const findClosestPointsOrigin = function (points, k)

points = [p1,p2,p3,...,pn]
*/
// 1 : loop all point get distance as key value
const findClosestPointsOrigin = function (points, k) {
  if (points.length <= k) return points
  let result = []
  let map = new Map()
  let valueArr = []
  for (let i = 0; i < points.length; i++) {
    let key = points[i]
    let x = points[i][0]
    let y = points[i][1]
    let value = x * x + y * y
    map.set(key, value)
    valueArr.push(value)
  }
  let arr = valueArr.sort().slice(0, 3)
  // sort the map and return top k
  for (let i = 0; i < arr.length; i++) {
    let p = getKeyByValue(map, arr[i])
    result.push(p)
  } 
}

function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

console.log(findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)) // [[-1, -1], [1, 1], [2, 2]]