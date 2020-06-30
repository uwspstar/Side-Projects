const findClosestPointsOrigin = function (points, k) {
    if (points.length <= k) return points
    //try to use selectionSort
    for (let i = 0; i < k; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < points.length; j++) {
            let dis1 = points[j][0] * points[j][0] + points[j][1] * points[j][1]
            let dis2 = points[smallIndex][0] * points[smallIndex][0] + points[smallIndex][1] * points[smallIndex][1]
            if (dis1 < dis2) {
                smallIndex = j
            }
        }
        if (smallIndex !== i) {
            [points[smallIndex], points[i]] = [points[i], points[smallIndex]]
        }
    }
    return points.slice(0,k)
}

console.log(findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)) // [[-1, -1], [1, 1], [2, 2]]
console.log(findClosestPointsOrigin([[1, 3], [-2, 2]], 1))

/*
Given a list of points and a number k, find the k closest points to the origin.

findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)
// [[-1, -1], [1, 1], [2, 2]]

const findClosestPointsOrigin = function (points, k)

points = [p1,p2,p3,...,pn]



// 2 : concept with arr selection sort



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
    // console.log('map = ', map)
    // console.log('valueArr = ', map)
    // need customer sort function for nums
    let arr = valueArr.sort(function (a, b) {
        return a - b;
    })
    arr = arr.slice(0, k)
    // console.log('arr = ', arr)
    // sort the map and return top k
    for (let i = 0; i < arr.length; i++) {
        let p = getKeyByValue(map, arr[i])
        map.delete(p) //bugs : if two value same
        // console.log('p = ', p)
        result.push(p)
    }
    return result
}


console.log(findClosestPointsOrigin([[1, 1], [3, 3], [2, 2], [4, 4], [-1, -1]], 3)) // [[-1, -1], [1, 1], [2, 2]]
console.log(findClosestPointsOrigin([[1, 3], [-2, 2]], 1))


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
*/