def witness(nums):
    count = 0
    highest = 0
    for num in nums[::-1]:
        if num > highest:
            highest = num
            count += 1
