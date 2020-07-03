
// (A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))
var arr = [4, 2, 5, 1, 3];
let mid = arr.length >> 1
let mid = parseInt(arr.length / 2)
let mid = Math.floor(arr.length / 2)
let left = arr.slice(0, mid)
let right = arr.slice(mid)