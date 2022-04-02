/*
Node.js
const array = [1, 2, 3, 4, 5]

console.log(...array)
*/
package main

import "fmt"

func main() {
	array := []byte{1, 2, 3, 4, 5}

	var i []interface{}
	for _, value := range array {
		i = append(i, value)
	}

	fmt.Println(i...)
}
// 1 2 3 4 5