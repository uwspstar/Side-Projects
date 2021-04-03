let A = [1,2, 3];
let B = [4, 5];

let tmp = A.shift();

B.push(tmp);

console.log(A,B);

let arr = A.concat(B);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}