/*
There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

Example:
Input: [3, 6, 3, 4, 1]
Output: 3
Explanation: Only [6, 4, 1] were able to see in front of them.

def witnesses(heights):
  witness_count = 0
  tallest = 0
  for height in heights[::-1]:
    if height > tallest:
      tallest = height
      witness_count += 1

  return witness_count

print witnesses([3, 6, 3, 4, 1])
*/


const witnesses = function (arr) {
    if (arr.length < 2) return 1;
    let highest = 0
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > highest) {
            highest = arr[i];
            count++;
        }
    }
    return count;
}
console.table(witnesses([3, 6, 3, 4, 1]));
console.table(witnesses([3]));
console.table(witnesses([3, 7, 4, 5, 6, 2]));