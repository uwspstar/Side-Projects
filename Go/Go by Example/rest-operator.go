/*
Node.js
function sum(...nums) {
	let t = 0

	for (let n of nums) {
		t += n
	}

	return t
}
console.log(sum(1, 2, 3, 4, 5))
*/
package main

import "fmt"

func sum(nums ...int) int {
	var t int
	for _, n := range nums {
		t += n
	}

	return t
}

func main() {
	total := sum(1, 2, 3, 4, 5)
	fmt.Println(total)
}
