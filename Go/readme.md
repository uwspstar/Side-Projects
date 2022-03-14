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

# closest thing to ternary operator

```js
const isOddLength = array.length % 2 == 1 ? 'yes' : 'no';
```

```go
isOddLength := "no"
if len(array)%2 == 1 {
	isOddLength = "yes"
}
```

# for

```go
for i := 0; i <= 5; i++ {
	fmt.Println(i)
}
// wrong
for var i int = 0; i <= 5; i++ {
	fmt.Println(i)
}

```

# while

```go
i := 0
for i <= 5 {
	fmt.Println(i)
	i++
}
```

# switch

-- https://golangbyexample.com/fallthrough-keyword-golang/

```go
package main

import "fmt"

func main() {
	value := "b"

	switch value {
		case "a":
			fmt.Println("A")
		case "b":
			fmt.Println("B")
		default:
			fmt.Println("first default")
	}

```

- `fallthrough` keyword is used in switch statement in golang. This keyword is used in switch case block. If the fallthrough keyword is present in the case block, then it will transfer control to the next case even though the current case might have matched.

```go
package main

import "fmt"

func main() {
    i := 45
    switch {
    case i < 10:
        fmt.Println("i is less than 10")
        fallthrough
    case i < 50:
        fmt.Println("i is less than 50")
        fallthrough
    case i < 100:
        fmt.Println("i is less than 100")
    }
}
//i is less than 50
//i is less than 100
```

# arrays

- https://github.com/miguelmota/golang-for-nodejs-developers?ref=morioh.com&utm_source=morioh.com#comments

```js
const array = [1, 2, 3, 4, 5];
console.log(array);

const clone = array.slice(0);
console.log(clone);

const sub = array.slice(2, 4);
console.log(sub);

const concatenated = clone.concat([6, 7]);
console.log(concatenated);

const prepended = [-2, -1, 0].concat(concatenated);
console.log(prepended);
```

```go
package main

import "fmt"

func main() {
	array := []int{1, 2, 3, 4, 5}
	fmt.Println(array)

    clone := make([]int, len(array))
    copy(clone, array)
    fmt.Println(clone)

    sub := array[2:4]
    fmt.Println(sub)

    concatenated := append(array, []int{6, 7}...)
    fmt.Println(concatenated)

    prepended := append([]int{-2, -1, 0}, concatenated...)
    fmt.Println(prepended)

}

```

```

```
