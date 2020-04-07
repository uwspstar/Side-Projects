def insertionSort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        for j in range(i-1, -1, -1):
            print(f"current = {current}")
            print(f"current j = {arr[j]}")
            if (current < arr[j]):
                arr[j+1] = arr[j]
            else:
                break

        arr[j + 1] = current


# arr = [12, 11, 13, 5, 6]
arr = [11, 13, 5]
insertionSort(arr)
print("Sorted array is:")
for i in range(len(arr)):
    print("%d" % arr[i])
