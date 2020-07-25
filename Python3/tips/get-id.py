# number is Immutable
x = 5
print(id(x))  # 4474328320
print(id(x + 1))  # 4456477984

# list is  Mutable
y = [1, 2, 3]
print(id(y))  # 140280474448352
y.append(4)
print(id(y))  # 140280474448352
