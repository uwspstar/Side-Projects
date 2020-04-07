
def insertionSort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        for j in range(i-1, -2, -1):  # need to use -2, not -1 for end
            # print(f"current = {current}")
            # print(f"current j = {arr[j]}")
            if (current < arr[j]):
                arr[j+1] = arr[j]
            else:
                break

        arr[j + 1] = current


"""
def insertionSort(arr):

    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):

        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
"""

arr = [12, 11, 13, 5, 6]
# arr = [11, 13, 5]
insertionSort(arr)
print("Sorted array is:")
for i in range(len(arr)):
    print("%d" % arr[i])
