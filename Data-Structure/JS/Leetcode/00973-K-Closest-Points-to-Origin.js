/*
973. K Closest Points to Origin
Medium

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Input: points = [[1,3],[-2,2]], K = 1 Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
 
Input: points = [[3,3],[5,-1],[-2,4]], K = 2 Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 
Note:
1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/



// lee code the fastest solution 
var kClosest = function(points, K) {
    function swap(a,b) {
        let temp = points[a]
        points[a] = points[b]
        points[b] = temp
    }
    
    function distance(point) {
        return point[0] * point[0] + point[1] * point[1]
    }
    
    function partition(left, right) {
        let searchIdx = left
        let pivotIdx = left
        let pivotDist = distance(points[right])
        
        while(searchIdx < right) {
            let dist = distance(points[searchIdx])
            if(dist <= pivotDist) {
                swap(searchIdx, pivotIdx)
                pivotIdx++
            }
            searchIdx++
        }
        swap(pivotIdx, right)
        return pivotIdx
    }
    
    function quickSelect(left,right, target) {
        let pivot = partition(left,right)
        if(pivot == target-1) return
        if(pivot >= target-1) {
            quickSelect(left, pivot - 1, target)
        } else {
            quickSelect(pivot + 1, right, target)
        }
    }
    quickSelect(0, points.length-1, K)
    return points.slice(0,K)
};



// 1 : my brut force solution not efficient
var kClosest = function(points, k) {
    
    function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
      }
    }
      
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
    let arr = valueArr.sort(function (a, b) {
        return a - b;
    })
    arr = arr.slice(0, k)
    
    for (let i = 0; i < arr.length; i++) {
      let p = getKeyByValue(map, arr[i])
      map.delete(p) //bugs : if two value same
      
      result.push(p)
    } 
    return result
  };
  
  