# Sets
# Sets are like formal mathematical sets.
# Sets do not have duplicate values
# Elements in sets aren't ordered.
# You cannot access items in a set by index.
# Sets can be useful if you need to keep track of a collection of elements, but don't care about ordering, keys or values and duplicates

# Sets cannot have duplicates
s = set({1, 2, 3, 4, 5, 5, 5})  # {1, 2, 3, 4, 5}

# Creating a new set
s = set({1, 4, 5})

# Creates a set with the same values as above
s = {1, 4, 5}

4 in s
# True

8 in s
# False
