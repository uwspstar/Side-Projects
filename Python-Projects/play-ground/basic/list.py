# List Comprehension vs Looping
numbers = [1, 2, 3, 4, 5]
doubled_numbers = []

for num in numbers:
    doubled_number = num * 2
    doubled_numbers.append(doubled_number)

print(doubled_numbers)  # [2, 4, 6, 8, 10]

numbers = [1, 2, 3, 4, 5]
doubled_numbers = [num * 2 for num in numbers]
print(doubled_numbers)  # [2, 4, 6, 8, 10]

name = 'ab'
[char.upper() for char in name]  # ['A', 'B']

friends = ['ashley', 'matt', 'michael']
[friend[0].upper() for friend in friends]  # ['Ashley', 'Matt', 'Michael']

[num*10 for num in range(1, 6)]  # [10, 20, 30, 40, 50]
[bool(val) for val in [0, [], '']]  # [False, False, False]

numbers = [1, 2, 3, 4, 5]
string_list = [str(num) for num in numbers]
print(string_list)  # ['1', '2', '3', '4', '5']

# LC with Conditional Logic
numbers = [1, 2, 3, 4, 5, 6]
evens = [num for num in numbers if num % 2 == 0]
odds = [num for num in numbers if num % 2 != 0]

# Tricks with Slices
string = "This is fun!"
string[::-1]

numbers = [1, 2, 3, 4, 5]
numbers[1:3] = ['a', 'b', 'c']
print(numbers)  # [1, 'a', 'b', 'c', 4, 5]


# Slicing
# some_list[start:end:step]
first_list = [1, 2, 3, 4]
first_list[1:]  # [2, 3, 4]
first_list[3:]  # [4]
first_list[-1:]  # [4]
first_list[-3:]  # [2, 3, 4]

first_list = [1, 2, 3, 4]
first_list[:2]  # [1, 2]
first_list[:4]  # [1, 2, 3, 4]
first_list[1:3]  # [2, 3]
first_list[:-1]  # [1, 2, 3]
first_list[1:-1]  # [2, 3]

first_list = [1, 2, 3, 4, 5, 6]
first_list[1::2]  # [2, 4, 6]
first_list[::2]  # [1, 3, 5]
first_list[1::-1]  # [2, 1]
first_list[:1:-1]  # [6, 5, 4, 3]
first_list[2::-1]  # [3, 2, 1]

# index
numbers = [5, 6, 7, 8, 9, 10]
numbers.index(6)  # 1
numbers.index(9)  # 4

# reverse
first_list = [1, 2, 3, 4]
first_list.reverse()
print(first_list)  # [4, 3, 2, 1]

# sort
another_list = [6, 4, 1, 2, 5]
another_list.sort()
print(another_list)  # [1, 2, 4, 5, 6]

# join
words = ['Coding', 'Is', 'Fun!']
' '.join(words)  # 'Coding is Fun!'
name = ['Mr', "Steele"]
'. '.join(name)  # 'Mr. Steele'
