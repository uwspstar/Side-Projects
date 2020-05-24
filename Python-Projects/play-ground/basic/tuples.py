# TUPLES
# An ordered collection or grouping of items!
# But it is immutable! Can NEVER be changed!
# Tuples are faster than lists
# Create using () or the tuple function

numbers = (1, 2, 3, 4)
x = (1, 2, 3)
3 in x  # True
x[0] = "change me!"  # TypeError: 'tuple' object does not support item assignment


# Accessing is just like a list!

first_tuple = (1, 2, 3, 3, 3)

first_tuple[1] // 2
first_tuple[2] // 3
first_tuple[-1] // 3

second_tuple = tuple(5, 1, 2)

second_tuple[0]  # 5
second_tuple[-1]  # 2

# We can use a for loop to iterate over a tuple just like a list!

names = ('Colt', 'Blue', 'Rusty', 'Lassie')

for name in names:
    print(name)

# Colt
# Blue
# Rusty
# Lassie

# count
x = (1,2,3,3,3)
x.count(1) # 1
x.count(3) # 3

# index
t = (1,2,3,3,3)
t.index(1) # 0
t.index(5) # ValueError: tuple.index(x): x not in tuple
t.index(3) # 2 - only the first matching index is returned