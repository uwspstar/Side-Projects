package main

import "fmt"

func main() {

	var firstName * string = new (string)
	*firstName = "Xing"
	fmt.Println(*firstName)

	lastName := "W"
	fmt.Println(lastName)

	ptr := &lastName
	fmt.Println(ptr, *ptr)

	lastName = "A"
	fmt.Println(ptr, *ptr)



	fmt.Println("hello world")
}