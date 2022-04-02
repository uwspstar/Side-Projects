package main

import (
	"fmt"
	"strings"
)

func main() {
	// fix size
	array := []int{1, 2, 3, 4, 5}
	fmt.Println(array)

	// 然而，在Go语言中，除了map、slice和chan，所有类型（包括struct）都是值传递的。
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

// Examples of iterating, mapping, filtering, and reducing arrays.

func arrayIteration() {
	array := []string{"a", "b", "c"}

	for i, value := range array {
		fmt.Println(i, value)
	}

	mapped := make([]string, len(array))
	for i, value := range array {
		mapped[i] = strings.ToUpper(value)
	}

	fmt.Println(mapped)

	var filtered []string
	for i, value := range array {
		if i%2 == 0 {
			filtered = append(filtered, value)
		}
	}

	fmt.Println(filtered)

	var reduced []string
	for i, value := range array {
		if i%2 == 0 {
			reduced = append(reduced, strings.ToUpper(value))
		}
	}

	fmt.Println(reduced)
}
// array sorting
