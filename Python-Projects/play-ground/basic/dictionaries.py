# Python : Dictionary keys are almost always numbers or strings, values can be anything!
# JS : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value
# https://realpython.com/python-vs-javascript/
# Dictionaries are a fundamental data structure for organizing and describing data into key-value pairs,
# Dictionaries are no ordering
#  iterate over dictionaries using keys(), values() and items()

# fromkeys : Creates key-value pairs from comma separated values:

{}.fromkeys("a", "b")  # {'a': 'b'}
{}.fromkeys(["email"], 'unknown')  # {'email': 'unknown'}
{}.fromkeys("a", [1, 2, 3, 4, 5])  # {'a': [1, 2, 3, 4, 5]}

# iterate
numbers = dict(first=1, second=2, third=3)

squared_numbers = {key: value ** 2 for key,value in numbers.items()}

print(squared_numbers) # {'first': 1, 'second': 4, 'third': 9}

{num: num**2 for num in [1,2,3,4,5]}

str1 = "ABC"
str2 = "123"
combo = {str1[i]: str2[i] for i in range(0,len(str1))} 
print(combo) # # {'A': '1', 'B': '2', 'C': '3'}

num_list = [1,2,3,4]

{ num:("even" if num % 2 == 0 else "odd") for num in num_list }

# {1: 'odd', 2: 'even', 3: 'odd', 4: 'even'}


# Dictionaries

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

# get
d = dict(a=1, b=2, c=3)
d['a']  # 1
d.get('a')  # 1
d['b']  # 2
d.get('b')  # 2
d['no_key']  # KeyError
d.get('no_key')  # None

# pop
d = dict(a=1, b=2, c=3)
d.pop()  # TypeError: pop expected at least 1 arguments, got 0
d.pop('a')  # 1
d  # {'c': 3, 'b': 2}
d.pop('e')  # KeyError

# popitem
d = dict(a=1, b=2, c=3, d=4, e=5)
d.popitem()  # ('d', 4)
d.popitem('a')  # TypeError: popitem() takes no arguments (1 given)

# update
first = dict(a=1, b=2, c=3, d=4, e=5)
second = {}

second.update(first)
second  # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# let's overwrite an existing key
second['a'] = "AMAZING"
second  # {'a': "AMAZING", 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# if we update again
second.update(first)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# the update overrides our values
second  # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
