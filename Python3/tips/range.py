# range is not a list, it is object
print(range(5))  # range(0, 5)

print(type(range(5)))  # <class 'range'>

"""
class range(stop)
class range(start, stop[, step])
Rather than being a function, range is actually an immutable sequence type, as documented in Ranges and Sequence Types — list, tuple, range.

Ranges containing absolute values larger than sys.maxsize are permitted but some features (such as len()) may raise OverflowError.
"""
# https://docs.python.org/3/library/stdtypes.html#range


print(list(range(0, -10, -1))) # [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
print(list(range(0))) # []
print(list(range(1, 0))) # []