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
                swapPositions(nums, p0, current)
                p0 += 1
                current += 1
            elif (nums[current] == 2):
                p2 += 1
                swapPositions(nums, p2, current)
            else:
                current += 1


nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
# [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]
print(Solution().sortColors(nums))
