// https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

/*
Shallow Copy: (copy memory address) It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.

Deep copy (cloning): (copy value) It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory. The correct term to use would be cloning, where you know that they both are totally the same, but yet different (i.e. stored as two different locations in the memory space).
var objectIsNew = JSON.parse(JSON.stringify(objectIsOld)); // clone
*/