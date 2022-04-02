package main

import (
	"fmt"
	"sort"
)

type Person struct {
	Name string
	Age  int
}

type PersonCollection []Person

func (pc PersonCollection) Len() int {
	return len(pc)
}

func (pc PersonCollection) Swap(i, j int) {
	pc[i], pc[j] = pc[j], pc[i]
}

func (pc PersonCollection) Less(i, j int) bool {
	// asc
	return pc[i].Age < pc[j].Age
}

func main() {
	intList := []int{1, 3, 5, 9, 4, 2, 0}

	// asc
	sort.Ints(intList)
	fmt.Println(intList)
	// desc
	sort.Sort(sort.Reverse(sort.IntSlice(intList)))
	fmt.Println(intList)

	stringList := []string{"a", "d", "z", "b", "c", "y"}

	// asc
	sort.Strings(stringList)
	fmt.Println(stringList)
	// desc
	sort.Sort(sort.Reverse(sort.StringSlice(stringList)))
	fmt.Println(stringList)

	collection := []Person{
		{"Li L", 8},
		{"Json C", 3},
		{"Zack W", 15},
		{"Yi M", 2},
	}

	// asc
	sort.Sort(PersonCollection(collection))
	fmt.Println(collection)
	// desc
	sort.Sort(sort.Reverse(PersonCollection(collection)))
	fmt.Println(collection)

	s := []int{4, 2, 3, 1}
	sort.Ints(s)
	fmt.Println(s) // [1 2 3 4]

	family := []struct {
		Name string
		Age  int
	}{
		{"Alice", 23},
		{"David", 2},
		{"Eve", 2},
		{"Bob", 25},
	}

	// Sort by age, keeping original order or equal elements.
	sort.SliceStable(family, func(i, j int) bool {
		return family[i].Age < family[j].Age
	})
	fmt.Println(family) // [{David 2} {Eve 2} {Alice 23} {Bob 25}]
}

/*
[0 1 2 3 4 5 9]
[9 5 4 3 2 1 0]
[a b c d y z]
[z y d c b a]
[{Yi M 2} {Json C 3} {Li L 8} {Zack W 15}]
[{Zack W 15} {Li L 8} {Json C 3} {Yi M 2}]
*/

// https://yourbasic.org/golang/how-to-sort-in-go/
/*
Sort a slice of ints, float64s or strings
Use one of the functions

sort.Ints
sort.Float64s
sort.Strings

s := []int{4, 2, 3, 1}
sort.Ints(s)
fmt.Println(s) // [1 2 3 4]
Package radix contains a drop-in replacement for sort.Strings, which can be more than twice as fast in some settings.

Sort with custom comparator

Use the function sort.Slice. It sorts a slice using a provided function less(i, j int) bool.
To sort the slice while keeping the original order of equal elements, use sort.SliceStable instead.
family := []struct {
    Name string
    Age  int
}{
    {"Alice", 23},
    {"David", 2},
    {"Eve", 2},
    {"Bob", 25},
}

// Sort by age, keeping original order or equal elements.
sort.SliceStable(family, func(i, j int) bool {
    return family[i].Age < family[j].Age
})
fmt.Println(family) // [{David 2} {Eve 2} {Alice 23} {Bob 25}]


Sort custom data structures
Use the generic sort.Sort and sort.Stable functions.
They sort any collection that implements the sort.Interface interface.

type Interface interface {
        // Len is the number of elements in the collection.
        Len() int
        // Less reports whether the element with
        // index i should sort before the element with index j.
        Less(i, j int) bool
        // Swap swaps the elements with indexes i and j.
        Swap(i, j int)
}
Here’s an example.

type Person struct {
    Name string
    Age  int
}

// ByAge implements sort.Interface based on the Age field.
type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

func main() {
    family := []Person{
        {"Alice", 23},
        {"Eve", 2},
        {"Bob", 25},
    }
    sort.Sort(ByAge(family))
    fmt.Println(family) // [{Eve 2} {Alice 23} {Bob 25}]
}

Bonus: Sort a map by key or value
A map is an unordered collection of key-value pairs. If you need a stable iteration order, you must maintain a separate data structure.

This code example uses a slice of keys to sort a map in key order.

m := map[string]int{"Alice": 2, "Cecil": 1, "Bob": 3}

keys := make([]string, 0, len(m))
for k := range m {
    keys = append(keys, k)
}
sort.Strings(keys)

for _, k := range keys {
    fmt.Println(k, m[k])
}
// Output:
// Alice 2
// Bob 3
// Cecil 1
*/
