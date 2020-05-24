# Sets
# Sets are like formal mathematical sets.
# Sets do not have duplicate values
# Elements in sets aren't ordered.
# You cannot access items in a set by index.
# Sets can be useful if you need to keep track of a collection of elements, but don't care about ordering, keys or values and duplicates

#
{x**2 for x in range(10)}  # {0, 1, 64, 4, 36, 9, 16, 49, 81, 25}


def are_all_vowels_in_string(string):
    return len({char for char in string if char in 'aeiou'}) == 5


# Sets cannot have duplicates
s = set({1, 2, 3, 4, 5, 5, 5})  # {1, 2, 3, 4, 5}

# Creating a new set
s = set({1, 4, 5})

# Creates a set with the same values as above
s = {1, 4, 5}

4 in s  # True

8 in s  # False

# loop
numbers = {1, 2, 3, 4}

for number in numbers:
    print(number)

# 1
# 2
# 3
# 4

# add
s = set([1, 2, 3])

s.add(4)  # s # {1, 2, 3, 4}

# remove
set1 = {1, 2, 3, 4, 5, 6}

set1.remove(3)

print(set1)  # {1, 2, 4, 5, 6}

# copy
s = set([1, 2, 3])
another_s = s.copy()
another_s  # {1, 2, 3}
another_s is s  # False

# clear
s = set([1, 2, 3])
s.clear()
s  # set()
