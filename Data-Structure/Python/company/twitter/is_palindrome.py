'''
Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.
'''

import math


def is_palindrome(n):
    if n < 10:
        return True
    while n > 10:
        k = int(math.log10(n))
        first = int(n / (10**k))
        last = int(n % 10)
        if first != last:
            return False
        n1 = int(n / 10)
        n = int(n1 % (10**(k-1)))

    return True
 # Fill this in.


print(is_palindrome(1234321))  # True
print(is_palindrome(1234322))  # False
