def fizz_buzz(num):
    if num % 15 == 0:
        print("FizzBuzz")
    elif num % 5 == 0:
        print("Buzz")
    elif num % 3 == 0:
        print("Fizz")
    else:
        print(num)


fizz_buzz(3)
fizz_buzz(5)
fizz_buzz(15)
fizz_buzz(7)
