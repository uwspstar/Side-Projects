/*
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
}
*/
/*
package main

func main() {
	// composite types
	var myStruct struct{} = struct{}{}
	var myArray []string = []string{}
	var myMap map[string]int = map[string]int{}
	var myFunction func() = func() {}
	var myChannel chan bool = make(chan bool)
	var myInterface interface{} = nil
	var myPointer *int = new(int)
}
*/
package main

import (
	"fmt"
	"reflect"
	"regexp"
	"time"
)

func main() {
	values := []interface{}{
		true,
		int8(10),
		int16(10),
		int32(10),
		int64(10),
		uint(10),
		uint8(10),
		uint16(10),
		uint32(10),
		uint64(10),
		uintptr(10),
		float32(10.5),
		float64(10.5),
		complex64(-1 + 10i),
		complex128(-1 + 10i),
		"foo",
		byte(10),
		'a',
		rune('a'),
		struct{}{},
		[]string{},
		map[string]int{},
		func() {},
		make(chan bool),
		nil,
		new(int),
		time.Now(),
		regexp.MustCompile(`^a$`),
	}

	for _, value := range values {
		fmt.Println(reflect.TypeOf(value))
	}
}