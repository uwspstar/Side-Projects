// A const statement can appear anywhere a var statement can.
// A numeric constant has no type until it’s given one, such as by an explicit conversion.
package main

import (
	"fmt"
	"math"
	"reflect"
)

const s string = "constant"

func main() {
	fmt.Println(s)

	const n = 500000000
	fmt.Println(n, reflect.TypeOf(n))

	const d = 3e20 / n
	fmt.Println(d)

	fmt.Println(int64(d))

	sin := math.Sin(n)
	fmt.Println(sin, reflect.TypeOf(sin))
}
