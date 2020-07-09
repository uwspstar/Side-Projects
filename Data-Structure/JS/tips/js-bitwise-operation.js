// https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
/*
Operator	    Description	Example	        Same as	Result	Decimal
&	AND	        x = 5 & 1	0101 & 0001	    0001	 1
|	OR	        x = 5 | 1	0101 | 0001	    0101	 5
~	NOT	        x = ~ 5	    ~0101	        1010	 10
^	XOR	        x = 5 ^ 1	0101 ^ 0001	    0100	 4
<<	Left shift	x = 5 << 1	0101 << 1	    1010	 10
>>	Right shift	x = 5 >> 1	0101 >> 1	    0010	  2
*/
/*
operator	    Usage	Description
Bitwise AND	    a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
Bitwise OR	    a | b	Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
Bitwise XOR	    a ^ b	Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
Bitwise NOT	    ~ a	Inverts the bits of its operand.
Left shift	    a << b	Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
Sign-propagating
right shift	    a >> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
Zero-fill
right shift	    a >>> b  	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left.
*/

/*

Bitwise shifting any number x to the left by y bits yields x * 2 ** y.
So e.g.: 9 << 3 translates to: 9 * (2 ** 3) = 9 * (8) = 72.

*/

/*
(0 & 0) === 0     // 0 x 0 = 0
(0 & 1) === 0     // 0 x 1 = 0
(1 & 0) === 0     // 1 x 0 = 0
(1 & 1) === 1     // 1 x 1 = 1

(A & 0) === 0
(A & ~A) === 0
(A & A) === A
(A & -1) === A

(0 | 0) === 0
(0 | 1) === 1
(1 | 0) === 1
(1 | 1) === 1

(A | 0) === A
(A | ~A) === -1
(A | A) === A
(A | -1) === -1

(0 ^ 0) === 0
(0 ^ 1) === 1
(1 ^ 0) === 1
(1 ^ 1) === 0

(A ^ 0) === A
(A ^ ~A) === -1
(A ^ A) === 0
(A ^ -1) === ~A


(A << B) => A * (2 ** B) => A * Math.pow(2, B)
(170 << 3) => 170 * (2 ** 3) => 170 * 8 => 1360

(A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))
(170 >> 3) => Math.floor(170 / (2 ** 3)) => Math.floor(170 / 8) => 21
(-170 >> 3) => Math.floor(-170 / (2 ** 3)) => Math.floor(-170 / 8) => -22
let mid = arr.length >> 1;

*/