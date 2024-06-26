# input is an array of integers,
# and you have to reorder its entries so that the even entries appear first


def even_odd(A):
    next_even, next_odd = 0, len(A) - 1
    while next_even < next_odd:
        if A[next_even] % 2 == 0:
            next_even += 1
        else:
            A[next_even], A[next_odd] = A[next_odd], A[next_even]
            next_odd -= 1
    return A


print(([1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(even_odd([1, 2, 3, 4, 5, 6, 7, 8, 9]))
