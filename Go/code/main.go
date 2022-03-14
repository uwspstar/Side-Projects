package main

import (
	"fmt"
	"log"
)

const pi = 3.1415
const (
	first = iota
	second = iota + 6
	third = 2 << iota // iota = 3
	fourth

)
func main() {

	log.Println("hello world")

	var firstName * string = new (string)
	*firstName = "Xing"
	fmt.Println(*firstName)

	lastName := "W"
	fmt.Println(lastName)

	ptr := &lastName
	fmt.Println(ptr, *ptr)

	lastName = "A"
	fmt.Println(ptr, *ptr)


	fmt.Println(pi)
	fmt.Println(first, second, third, fourth)

	fmt.Println("hello world")
}