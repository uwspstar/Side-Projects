print("in or out")
age = input("how old are you dude: ")
if age:
    age = int(age)
    if age >= 18:
        print("come in")
    else:
        print(f"wait, try come back {18 - age} years later...")
else:
    print("How old are you: ")
