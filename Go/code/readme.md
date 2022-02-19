- `code-insiders .`

# a tour of the Go programming language.

- https://go.dev/tour/welcome/1
- go run main.go

# create a mod file

- go mod init github.com/uwspstar/go

# another way to run

- go run github.com/uwspstar/go

# Go's basic types are

- `bool`

- `string`

- `int int8 int16 int32 int64`
- `uint uint8 uint16 uint32 uint64 uintptr`

- `byte` // alias for uint8

- `rune` // alias for int32
  // represents a Unicode code point

- `float32 float64`

- `complex64 complex128`

# Zero values

- Variables declared without an explicit initial value are given their zero value.

# The zero value is:

- `0` for `numeric` types,
- `false` for the `boolean` type, and
- `""` (the empty string) for `strings`.

# working with Primitive data Type

- Primitives
- Pointers
- Constants

# Variables

- The var statement declares a list of variables; as in function argument lists, the type is last.

- A var statement can be at package or function level. We see both in this example.

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    i := 2
    s := "1000"
    if len(s) > 1 {
        i, _ := strconv.Atoi(s)  // i is local variable inside if {..} scope
        i = i + 5
    }
    fmt.Println(i) // 2
}
```

# Short variable declarations

```go
package main

import "fmt"

func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
```

# Type conversions

- The expression T(v) converts the value v to the type T.

- Some numeric conversions:

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
```

- Or, put more simply:

```go
i := 42
f := float64(i)
u := uint(f)
```

- Unlike in C, in Go assignment between items of different type requires an explicit conversion. Try removing the float64 or uint conversions in the example and see what happens.

# Type inference

- When declaring a variable without specifying an explicit type (either by using the := syntax or var = expression syntax), the variable's type is inferred from the value on the right hand side.

- When the right hand side of the declaration is typed, the new variable is of that same type:

```go
var i int
j := i // j is an int
```

- But when the right hand side contains an untyped numeric constant, the new variable may be an int, float64, or complex128 depending on the precision of the constant:

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

- Try changing the initial value of v in the example code and observe how its type is affected.

# Constants
- Constants are declared like variables, but with the `const` keyword.
- Constants can be `character`, `string`, `boolean`, or `numeric` values.
- Constants cannot be declared using the := syntax.