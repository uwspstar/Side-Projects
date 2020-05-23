"""
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
"""


def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")
    return wrapper


@be_polite
def greet():
    print("My name is Matt.")

# we don't need to set
# greet = be_polite(greet)


def shout(fn):
    def wrapper(name):
        return fn(name).upper()
    return wrapper


@shout
def greet(name):
    return f"Hi, I'm {name}."


@shout
def order(main, side):
    return f"Hi, I'd like the {main}, with a side of {side}, please."
