---
marp: true
theme: default
paginate: true
size: 16:9
---

# parameter vs argument

- When a parameter is passed to the method, it is called an argument. So, from the example above: fname is a parameter, while Liam, Jenny and Anja are arguments.

```java
public class Main {
  static void myMethod(String fname) {
    System.out.println(fname + " Refsnes");
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
```

---

# Method Overloading
- Multiple methods can have the same name as long as the number and/or type of parameters are different.
- not care about return type
```java
int myMethod(int x)
float myMethod(float x)
double myMethod(double x, double y)
```
