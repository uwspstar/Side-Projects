// https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

/*
Shallow Copy: It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.

Deep copy: It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory.
*/