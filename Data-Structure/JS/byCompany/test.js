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

  console.log(findClosestPointsOrigin([[1,3],[-2,2]], 1))