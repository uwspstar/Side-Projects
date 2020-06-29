/*
Given a list of points and a number k, find the k closest points to the origin.

findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)
// [[-1, -1], [1, 1], [2, 2]]

const findClosestPointsOrigin = function (points, k)

points = [p1,p2,p3,...,pn]
*/

// 1 : loop all point get distance as key value
 
function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

const findClosestPointsOrigin = function (points, k) {
  if (points.length <= k) return points
  let result = []
  let map = new Map()
  let valueArr = []
  //console.log('points = ', points)
  for (let i = 0; i < points.length; i++) {
    let key = points[i]
    let x = points[i][0]
    let y = points[i][1]
    let value = x * x + y * y
    map.set(key, value)
    valueArr.push(value)
  }
  console.log('map = ', map)
  console.log('valueArr = ', map)
  // need customer sort function for nums
  let arr = valueArr.sort(function (a, b) {
      return a - b;
  })
  arr = arr.slice(0, 3)
  console.log('arr = ', arr)
  // sort the map and return top k
  for (let i = 0; i < arr.length; i++) {
    let p = getKeyByValue(map, arr[i])
    map.delete(p) //bugs : if two value same
    console.log('p = ', p)
    result.push(p)
  } 
  return result
}


console.log(findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)) // [[-1, -1], [1, 1], [2, 2]]

/*
973. K Closest Points to Origin
Medium

1754

112

Add to List

Share
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1 Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2 Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/