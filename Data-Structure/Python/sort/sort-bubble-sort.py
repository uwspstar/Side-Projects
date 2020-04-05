"""
def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
"""
"""
arr = [5, 4, 3, 2, 1]
n = len(arr)
print(f"n = {n}")
for i in range(n-1, -1, -1):
    print(i)
"""


def bubbleSort(arr):
    n = len(arr)
    for i in range(n-1, -1, -1):
        for j in range(0, i):
            # print(f"j={j}")
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]


arr = [5, 4, 3, 2, 1]
bubbleSort(arr)

for i in range(len(arr)):
    print(f"{arr[i]}")
