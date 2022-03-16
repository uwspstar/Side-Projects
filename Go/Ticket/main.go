package main

import "fmt"

func main() {
	var conferenceName = "Go Conference"
	const conferenceTickets = 50
	var remainingTickets = 50

	fmt.Printf("Welcome to, %v booking app \n", conferenceName)
	fmt.Println("We have ", conferenceTickets, " tickets and ", remainingTickets, " remaining")
	fmt.Println("hello, get your tickets here to attend")

}
