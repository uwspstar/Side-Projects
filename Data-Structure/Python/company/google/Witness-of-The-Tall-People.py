def witness(nums):
    count = 0
    highest = 0
    for num in nums[::-1]:
        if num > highest:
            highest = num
            count += 1
    return count


print(witness([3, 6, 3, 4, 1]))
