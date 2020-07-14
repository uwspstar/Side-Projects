# print("hellow worlds")


def witness(nums):
    if len(nums) == 1:
        return 1
    count = 0
    highest = 0
    for num in nums[::-1]:
        if num > highest:
            highest = num
            count += 1
    return count


print(witness([3, 6, 3, 4, 1]))  # 3 = [6, 4, 1]
print(witness([3]))  # 1 = [3]
print(witness([3, 7, 4, 5, 6, 2]))  # 3 = [7, 6, 2]
print(witness([3, 3, 3, 3, 1]))  # 2 = [3, 1]
