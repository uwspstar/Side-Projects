for num in range(1, 21):
    if num == 4 or num == 13:
        print(f"{num} unlucky")
    elif num % 2 == 0:
        print(f"{num} even")
    else:
        print(f"{num} odd")
