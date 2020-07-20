'''
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
'''

class Solution:
  def sortColors(self, nums):
      p0 = 0
      p2 = len(nums)
    
    

nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1] 
print(Solution().sortColors(nums)) # [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]
