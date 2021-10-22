---
marp: true
theme: default
paginate: true
size: 16:9
---

# String

# All String Methods

- https://www.w3schools.com/java/java_ref_string.asp

---

- `codePointAt()`

```java
String myStr = "Hello";
int result = myStr.codePointAt(0);
System.out.println(result);

String str = "Hello World";
int codePointAt0 = Character.codePointAt(str, 0);
```

---

- `split()`
- `toCharArray()`
- `compareTo()`
- `substring()`

---

- `indexOf` : `String txt = "Please locate where 'locate' occurs!";`
  `System.out.println(txt.indexOf("locate")); // Outputs 7`
- Java using `length()` javascript using `length`
- `concat` : `String firstName = "John ";String lastName = "Doe";`
  `System.out.println(firstName.concat(lastName));`

---

- `uppercase`, all reference type (non - primitive type) using uppercase

- `toUpperCase()`, `toLowerCase()`

---

# The backslash (\) escape character turns special characters into string characters:

```java
\n	New Line
\r	Carriage Return
\t	Tab
\b	Backspace
\f	Form Feed
```

---

```java
String x = "10";
int y = 20;
String z = x + y;   // z will be 1020 (a String)
```
