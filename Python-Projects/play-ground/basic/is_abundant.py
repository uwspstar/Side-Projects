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
    for d in range(1, n):
        if n % d == 0:
            total += d
    return total > n


def list_first_abundants(n):
    abundant_nums = []
    num = 1
    while len(abundant_nums) < n:
        if is_abundant(num):
            abundant_nums.append(num)
        num += 1
    return abundant_nums


def gen_first_abundants(n):
    count = 0
    num = 1
    while count < n:
        if is_abundant(num):
            yield num
            count += 1
        num += 1


is_abundant(12)  # True
is_abundant(4)  # False
