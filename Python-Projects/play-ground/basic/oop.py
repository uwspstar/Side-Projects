# Classes start with a Uppercase
class User:
    pass


user1 = User()
print(type(user1))

# Classes in Python can have a special __init__ method, which gets called every time you create an instance of the class (instantiate).
# The self keyword refers to the current class instance. self must always be the first parameter to __init__ and any methods and properties on class instances.
# Class methods are methods (with the @classmethod decorator) that are not concerned with instances, but the class itself.
# The first argument is cls (for class) instead of self. Like self, it does not need to be passed in explicitly.
# Class methods are available on the class itself and any instances of the class, and are mostly used for building new instances of classes
# In Python, inheritance works by passing the parent class as an argument to the definition of a child class:
# The super() keyword allows us to call the __init__ function of a parent class


class Vehicle:

    def __init__(self, year, color, brand, likes=0):
        self.year = year
        self.color = color
        self.brand = brand

    def get_year(self):
        print(self.year)

    @classmethod
    def get_year_from_default(cls, year):
        pass
        # return cls(*params)  # this is the same as calling Person(*params)


class Truck(Vehicle):
    def __init__(self, name):
        super().__init__("1973", "while", "GM")
        self.name = name


# Creating an object that is an instance of a class is called instantiating a class.
v = Vehicle("1973", "red", "BMW")
print(type(v))
print(v.brand, v.color, v.year)
print(v.get_year())
print(Vehicle.get_year_from_default("1988"))

t = Truck("big")
print(type(t))
print(t.brand, t.color, t.year)
print(t.name, t.brand, t.color, t.year) # big GM while 1973
print(t.get_year())