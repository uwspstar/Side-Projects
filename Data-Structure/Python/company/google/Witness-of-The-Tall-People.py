'''
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
'''


def witness(nums):
    count = 0
    highest = 0
    for num in nums[::-1]:
        if num > highest:
            highest = num
            count += 1
    return count


print(witness([3, 6, 3, 4, 1]))  # 3 [6,4,1]
