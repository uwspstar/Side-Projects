package main

import (
	"fmt"
	"log"
)

const pi = 3.1415
const (
	first  = iota
	second = iota + 6
	third  = 2 << iota // iota = 3
	fourth
)

func main() {


	
	fmt.Print("hello");

	primes := [6]int{2, 3, 5, 7, 11, 13} // Array

	var s []int = primes[1:4] //Slices
	fmt.Println(s)            //[3 5 7]
	s = append(s, 100, 200, 300)
	fmt.Println(s) // [3 5 7 100 200 300]

	for i := 0; i <= 5; i++ {
		fmt.Println(i)
	}

	log.Println("hello world")

	var firstName *string = new(string)
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
