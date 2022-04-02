// https://stackoverflow.com/questions/9320862/why-would-i-make-or-new

/*
Go has multiple ways of memory allocation and value initialization:

&T{...}, &someLocalVar, new, make

Allocation, can also happen when creating composite literals.

new, can be used to allocate values such as integers, &int is illegal:

new(Point)
&Point{}      // OK
&Point{2, 3}  // Combines allocation and initialization

new(int)
&int          // Illegal

// Works, but it is less convenient to write than new(int)
var i int
&i
*/

/*
The difference between new and make can be seen by looking at the following example:

p := new(chan int)   // p has type: *chan int
c := make(chan int)  // c has type: chan int
Suppose Go does not have new and make, but it has the built-in function NEW. Then the example code would look like this:

p := NEW(*chan int)  // * is mandatory
c := NEW(chan int)
The * would be mandatory, so:

new(int)        -->  NEW(*int)
new(Point)      -->  NEW(*Point)
new(chan int)   -->  NEW(*chan int)
make([]int, 10) -->  NEW([]int, 10)

make(Point)  // Illegal
make(int)    // Illegal

Yes, merging new and make into a single built-in function is possible. However, it is probable that a single built-in function would lead to more confusion among new Go programmers than having two built-in functions.

Considering all of the above points, it appears more appropriate for new and make to remain separate.
*/