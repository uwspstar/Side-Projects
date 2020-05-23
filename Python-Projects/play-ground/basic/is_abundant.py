"""
An Example

Some Number Theory!

A number is called abundant if the sum of all of its proper divisors exceeds the number.

Examples:

12 (1 + 2 + 3 + 4 + 6 > 12)
18 (1 + 2 + 3 + 6 + 9 > 18)
20 (1 + 2 + 4 + 5 + 10 > 20) 

Non-Examples:

4 (1 + 2 < 4)
6 (1 + 2 + 3 = 6)
15 (1 + 3 + 5 < 15)
"""

def is_abundant(n):
    total = 0
    for d in range(1,n):
        if n % d == 0:
            total += d
    return total > n

is_abundant(12) # True
is_abundant(4) # False