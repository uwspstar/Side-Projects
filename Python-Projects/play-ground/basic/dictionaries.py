# Python : Dictionary keys are almost always numbers or strings, values can be anything!
# JS : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value
# https://realpython.com/python-vs-javascript/
# Dictionaries are a fundamental data structure for organizing and describing data into key-value pairs,
# Dictionaries are no ordering

instructor = {
    "name": "Colt",
    "owns_dog": True,
    "num_courses": 4,
    "favorite_language": "Python",
    "is_hilarious": False,
    44: "my favorite number!"
}

# Does a dictionary have a key?
"name" in instructor  # True
"awesome" in instructor  # False

# Does a dictionary have a value?
"Colt" in instructor.values()  # True
"Nope!" in instructor.values()  # False

# Accessing All Values in a Dictionary Use .values()

for value in instructor.values():
    print(value)
# "Colt"
# True
# 4
# "Python"
# False
# "my favorite number!"


# Accessing All Keys in a Dictionary Use .keys()

for key in instructor.keys():
    print(key)

# name
# owns_dog
# num_courses
# favorite_language
# is_hilarious
# 44

# Accessing All Keys and Values Use .items()
for key, value in instructor.items():
    print(key, value)

# name "Colt"
# owns_dog True
# num_courses 4
# favorite_language "Python"
# is_hilarious False
# 44 "my favorite number!"


another_dictionary = dict(key='value')
another_dictionary  # {'key': 'value'}

instructor["name"]  # "Colt"
instructor["thing"]  # KeyError

# clear
d = dict(a=1, b=2, c=3)
d.clear()
d  # {}

# copy
d = dict(a=1, b=2, c=3)
c = d.copy()
c  # {'a': 1, 'b': 2, 'c': 3}
c is d  # False
