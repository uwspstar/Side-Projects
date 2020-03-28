from random import randint
num = randint(1, 1000)
print(f"num is {num}")
if num % 2 != 0:
    print("odd")
else:
    print("even")
