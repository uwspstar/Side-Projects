---
marp: true
theme: default
paginate: true
size: 16:9
---

# JAVA 101

- https://www.w3schools.com/java/default.asp

```java
// make sure the class name "Main" is match the file name "Main.java"
public class Main {
    public static void main(String[] arg) {
        System.out.println("hello World");
    }
}
```

---

# javac

- `C:\Users\Your Name>javac Main.java`
  - javac Main.java -> create Main.class

# java

- `C:\Users\Your Name>java Main` -> Hello World

---

# class

- Java is case-sensitive
- The name of the java file must match the class name.
- A class should always start with an uppercase first letter.
- Every line of code that runs in Java must be inside a class.
- every Java program has a class name which must match the filename, and that every program must contain the main() method.

---

# The main Method

- The main() method is required and you will see it in every Java program

# System.out.println()

---

# JAVA Data types are divided into two groups:

- Primitive data types :
  `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`
- Non-primitive data types :
  `String`, `Array` and `Class`

---

# byte and bit

- 1 byte = 8 bits
- first bit is sign (+, -), nums is 7 bits = 2^7 = 128
- 1 byte (-128 ~ +127)

---

- `byte` 1 byte Stores whole numbers from -128 to 127
- `short` `2 bytes` Stores whole numbers from -32,768 to 32,767
- `int` `4 bytes` Stores whole numbers from -2,147,483,648 to 2,147,483,647
- `long` `8 bytes` Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
- `float` `4 bytes` Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits `float myNum = 5.75f;`
- `double` `8 bytes` Stores fractional numbers. Sufficient for storing 15 decimal digits `double myNum = 19.99d;`
- `boolean` `1 bit` Stores true or false values
- `char` `2 bytes` Stores a single character/letter or ASCII values

---

# Use float or double?

- The precision of a floating point value indicates how many digits the value can have after the decimal point.
- The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits.
- Therefore it is safer to use double for most calculations.

---

# characters

- you can use ASCII values to display certain characters:
  `char myVar1 = 65, myVar2 = 66, myVar2 = 67;`

---

# Non-Primitive Data Types

- Non-primitive data types starts with an uppercase letter in JAVA.

- Non-primitive data types are called reference types because they refer to objects.

- Non-primitive types are created by the programmer and is not defined by Java (except for String)

- Examples of non-primitive types are `Strings`, `Array`s, `Class`es, `Interface`, etc.

---

# `primitive` vs `non-primitive` data types

- A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.

- A primitive type has always a value, while non-primitive types can be null.

- Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).

- Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.

- The size of a primitive type depends on the data type, while non-primitive types have all the same size.

---

# Final Variables

- you can add the final keyword if you don't want others (or yourself) to overwrite existing values (this will declare the variable as "final" or "constant", which means unchangeable and read-only):

```java
final int myNum = 15; myNum = 20;
// will generate an error: cannot assign a value to a final variable
```

---

# Java Identifiers

- All Java variables must be identified with unique names. These unique names are called identifiers.

---

# The general rules for constructing names

- Names must start with a lowercase letter and it cannot contain whitespace
- Names can contain letters, digits, underscores, and dollar signs
- Names can also begin with $ and \_ (but we will not use it in this tutorial)
- Reserved words (like Java keywords, such as int or boolean) cannot be used as names

---

# Java Type Casting

- Widening Casting (automatically) - converting a smaller type to a larger type size
  `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`

- `double myDouble = myInt; // Automatic casting: int to double`

- Narrowing Casting (manually) - converting a larger type to a smaller size type
  double -> float -> long -> int -> char -> short -> byte
- `int myInt = (int) myDouble; // Manual casting: double to int`

---

# Java Assignment Operators

```java
&=	x &= 3	x = x & 3
|=	x |= 3	x = x | 3
^=	x ^= 3	x = x ^ 3
>>=	x >>= 3	x = x >> 3
<<=	x <<= 3	x = x << 3
```

# Java Logical Operators
`x < 5 &&  x < 10`
`x < 5 || x < 4`
`!(x < 5 && x < 10)`
