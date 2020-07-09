//https://brilliant.org/wiki/radix-sort/#
/*
Radix sort is a special sorting algorithm that works on lists of numbers
*/






/*

create 10 buckets (queues) for each digit (0 to 9)

for each digit placing

  for each element in list

    move element into respective bucket

  for each bucket, starting from smallest digit

    while bucket is non-empty

      restore element to list
*/