- `code-insiders .`

# a tour of the Go programming language.

- https://go.dev/tour/welcome/1
- go version
- go run main.go
- go mod init

# https://github.com/miguelmota/golang-for-nodejs-developers?ref=morioh.com&utm_source=morioh.com#comments

# Types

- Node.js

```js
// primitives
const myBool = true;
const myNumber = 10;
const myString = 'foo';
const mySymbol = Symbol('bar');
const myNull = null;
const myUndefined = undefined;

// object types
const myObject = {};
const myArray = [];
const myFunction = function () {};
const myError = new Error('error');
const myDate = new Date();
const myRegex = /a/;
const myMap = new Map();
const mySet = new Set();
const myPromise = Promise.resolve();
const myGenerator = function* () {};
const myClass = class {};
```

- Go

```go
package main

func main() {
	// primitives
	var myBool bool = true
	var myInt int = 10
	var myInt8 int8 = 10
	var myInt16 int16 = 10
	var myInt32 int32 = 10
	var myInt64 int64 = 10
	var myUint uint = 10 // A UINT is a 32-bit unsigned integer (range: 0 through 4294967295 decimal). Because a UINT is unsigned, its first bit (Most Significant Bit (MSB)) is not reserved for signing.
	var myUint8 uint8 = 10
	var myUint16 uint16 = 10
	var myUint32 uint32 = 10
	var myUint64 uint64 = 10
	var myUintptr uintptr = 10 //uintptr is generally used to perform indirect arithmetic operations on unsafe pointers for unsafe
	var myFloat32 float32 = 10.5
	var myFloat64 float64 = 10.5
	var myComplex64 complex64 = -1 + 10i
	var myComplex128 complex128 = -1 + 10i
	var myString string = "foo"
	var myByte byte = 10  // alias to uint8
	var myRune rune = 'a' // alias to int32

	// composite types
	var myStruct struct{} = struct{}{}
	var myArray []string = []string{}
	var myMap map[string]int = map[string]int{}
	var myFunction func() = func() {}
	var myChannel chan bool = make(chan bool)
	var myInterface interface{} = nil
	var myPointer *int = new(int)
}
```
