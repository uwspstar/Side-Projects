/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library’s sort function for this problem.

Can you do this in a single pass?

Example: Input: [2,0,2,1,1,0] Output: [0,0,1,1,2,2]

class Solution:
  def sortColors(self, nums):
    # Fill this in.

nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
print("Before Sort: ")
print(nums) # [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]

Solution().sortColors(nums)
print("After Sort: ")
print(nums) # [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]
*/

//solution 1 loop all put 3 different arr and concat at the end
//solution 2 use map to save count of 0, 1 and , loop 3 times add to result arr
//solution 3 use two pointers, one is for arr[i] = 0 (start++), one for arr[i] = 2 (end --); for arr[i] = 1, not changes

