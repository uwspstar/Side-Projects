/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

const zeroMatrix = function (arr) {
    let row  = arr.length;
    let col = arr[0].length;
    let map = new Map()
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === 0) {
                map.set([i,j], true);
            }
        }
    }

    for (let k of map.keys()){
        if (k[0])
    }
}

// 3 * 4
let arr = [
    [1, 0, 3, 4], [0, 2, 5, 6], [7, 8, 9, 0]
]
console.log(zeroMatrix(arr)); //[[7, 4, 1],[8, 5, 2],[9, 6, 3]]