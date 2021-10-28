---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_inner_classes.asp

# Inner Classes

- Unlike a "regular" class, an inner class can be `private` or `protected`. If you don't want outside objects to access the inner class, declare the class as `private`:
- just like `static` attributes and methods, a static inner class does not have access to members of the outer class.

---

```java
class OuterClass {
  int x = 10;

  class InnerClass {
    int y = 5;
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass(); // myOuter.new InnerClass();
    System.out.println(myInner.y + myOuter.x);
  }
}
```
