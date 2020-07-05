// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

/*

typeof 3.14 === 'number';
typeof(42) === 'number';

typeof operand
typeof(operand)


// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
*/

/*
everything can be object

Type	            Result
------------------------------------------------------------------------
Undefined	        "undefined"                             *********
Null	            "object"                                (see below)
Boolean	            "boolean"
Number	            "number"                                *********
BigInt              "bigint"    (new in ECMAScript 2020)	*********
String	            "string"
Symbol              "symbol"    (new in ECMAScript 2015)	
Function object     "function"  (implements [[Call]] in ECMA-262 terms)	
Any other object
-------------------------------------------------------------------------
*/