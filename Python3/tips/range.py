# range is not a list, it is object
print(range(5))  # range(0, 5)

print(type(range(5)))  # <class 'range'>

"""
class range(stop)
class range(start, stop[, step])
Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.
"""
# https://docs.python.org/3/library/stdtypes.html#range
