'''
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
'''


class Solution:
    def swapPositions(self, list, pos1, pos2):
        list[pos1], list[pos2] = list[pos2], list[pos1]
        return list

    def sortColors(self, nums):
        p0 = 0
        p2 = len(nums) - 1
        current = 0
        while current <= p2:
            if(nums[current] == 0):
                self.swapPositions(nums, p0, current)
                p0 += 1
                current += 1
            elif (nums[current] == 2):
                self.swapPositions(nums, p2, current)
                p2 -= 1
            else:
                current += 1

        return nums


nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
# [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]
print(Solution().sortColors(nums))
