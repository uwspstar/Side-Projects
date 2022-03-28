package main

import (
	"fmt"
	"time"
)

func main() {

	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		time.Sleep(1 * time.Millisecond)
		c1 <- "one"
	}()

	go func() {
		time.Sleep(1 * time.Millisecond)
		c2 <- "two"
	}()

	for i := 0; i < 2; i++ {
		fmt.Println(i)
		select {
		case msg1 := <-c1:
			fmt.Println("received", msg1)
		case msg2 := <-c2:
			fmt.Println("new received", msg2)
		}
	}



	/*
		// Define map
		emails := make(map[string]string)
		emails["xing"] = "x@gmail.com"
		emails["xing2"] = "x2@gmail.com"
		emails["xing3"] = "x3@gmail.com"

		fmt.Println(emails)

		delete(emails, "xing")

		fmt.Println(emails)

		maps := map[string]string{"x": "1", "Y": "2", "Z": "3"}
		fmt.Println(maps) // order based on ascII

		for i, v := range maps {
			fmt.Printf("%s- ID: %s\n", i, v)
		}

		ids := []int{33, 72, 56}
		for i, id := range ids {
			fmt.Printf("%d- ID: %d\n", i, id)
		}


			var name string
			fmt.Scan(&name)
			var age uint = 50

			fmt.Printf("test , %v, %v \n", name, age)
			if age > 10 {
				fmt.Println("age > 10 is", age >= 10)
			}
	*/

}
