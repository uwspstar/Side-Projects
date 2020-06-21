/*
Problem: Tower of Hanoi
The Tower of Hanoi is a puzzle with three pegs, and a variable number of discs. 
The discs are stacked with the largest ones on the bottom and the smallest on top. 
Each time a disc is moved from one peg to another peg, counts as one step, regardless of if the new peg is adjacent to the old one.
The goal of the puzzle is to move the whole tower from one peg to another peg in the smallest number of steps.
Your task is to write a function that takes an integer as the input and outputs another integer that represents the minimum number of steps necessary to move a tower of that size from one peg to another.
Input: Integer (discs)
Output: Integer
*/

/* Javascript
Hanoi(0) => 0
Hanoi(1) => 1 (trivial cases)
Hanoi(2) => 3 (move top one off, move bottom disc, and then top back on)
Hanoi(3) => 7
Hanoi(4) => 15
*/
// Runs in Exponential Time O(2^N) Linear Call Stack Space O(N)
function Hanoi(discs) {
    if(discs === 0) {
    return 0;
    }
    return Hanoi(discs - 1) + 1 + Hanoi(discs - 1)
   }
   // Runs in Linear Time O(N) & Linear Cal Stack Space O(N)
   function Hanoi(discs) {
    if(discs === 0) {
    return 0;
    }
    return 2 * Hanoi(discs - 1) + 1
   }
   // One Line Recursive Solution
   const Hanoi = (discs) => discs === 0 ? 0 : 2 * Hanoi(discs - 1) + 1
   //Iterative Solution Runs in Linear Time O(N) & Constant Space O(N)
   function Hanoi(discs) {
    let result = 0
    for(let i = 0; i <= discs; i++) {
     results = 2 * result + 1
    }
    return result
   }
   //Formula Solution
   //Log Time O(log N)
   function Hanoi(discs) {
    return Math.pow(2, discs) - 1
   }