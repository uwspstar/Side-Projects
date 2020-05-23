def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")
    return wrapper

def greet():
    print("My name is xin.")

greet = be_polite(greet)
# we are decorating our function 
# with politeness!