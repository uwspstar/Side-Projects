---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_modifiers.asp

# Modifiers

- `Access Modifiers` - controls the access level
- `Non-Access Modifiers` - do not control access level, but provides other functionality

---

# Access Modifiers

- `public` The code is accessible for all classes
- `private` The code is only accessible within the declared class
- `default` The code is only accessible in the same package. This is used when you don't specify a modifier. You will learn more about packages in the Packages chapter
- `protected` The code is accessible in the same package and subclasses. You will learn more about subclasses and superclasses in the Inheritance chapter

---

# Non-Access Modifiers

- `final` Attributes and methods cannot be overridden/modified
- `static` Attributes and methods belongs to the class, rather than an object
- `abstract` Can only be used in an abstract class, and can `only be used on methods`. The method does not have a body, for example abstract void run();. The body is provided by the subclass (inherited from). You will learn more about inheritance and abstraction in the Inheritance and Abstraction chapters
- `transient` Attributes and methods are skipped when serializing the object containing them
- `synchronized` Methods can only be accessed by one thread at a time
- `volatile` The value of an attribute is not cached thread-locally, and is always read from the "main memory"

---

# Final

- If you don't want the ability to override existing attribute values, declare attributes as final:
  ` final int x = 10;` `final double PI = 3.14;`

---

# Static

- A static method means that it can be accessed without creating an object of the class, unlike public:

---

# differences between static and public methods:

```java
public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }
  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }
  // Main method
  public static void main(String[ ] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would output an error
    Main myObj = new Main(); // Create an object of Main
    myObj.myPublicMethod(); // Call the public method
  }
}
```

---

# Abstract

- An abstract method belongs to an abstract class, and it does not have a body. The body is provided by the subclass:

---

```java
abstract class Main {// abstract class
  public String fname = "John";
  public int age = 24;
  public abstract void study(); // abstract method, not have a body
}

class Student extends Main {// Subclass (inherit from Main)
  public int graduationYear = 2018;
  public void study() { // the body of the abstract method is provided here
    System.out.println("Studying all day long");
  }
}

class Second {
  public static void main(String[] args) {
    Student myObj = new Student();
    System.out.println("Graduation Year: " + myObj.graduationYear);
    myObj.study(); // call abstract method
  }
}
```
