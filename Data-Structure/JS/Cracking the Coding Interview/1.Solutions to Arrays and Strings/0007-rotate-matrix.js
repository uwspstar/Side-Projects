/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

[
    [1, 2, 3],     [7, 4, 1],
    [4, 5, 6], --> [8, 5, 2],
    [7, 8, 9]      [9, 6, 3]
]

step1 : switch position cross line, such as 4 and 2, 7 and 3, and 8 and 6
step2 : switch each line first element and last element
*/

const rotateMatrix = function (arr) {



}
let arr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
console.log(rotateMatrix(arr)); //[[7, 4, 1],[8, 5, 2],[9, 6, 3]]