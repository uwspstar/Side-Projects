---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_abstract.asp

# Abstraction

- Data abstraction is the process of hiding certain details and showing only essential information to the user.
- Abstraction can be achieved with either `abstract` classes or `interfaces`

---

# Why And When To Use Abstract Classes and Methods?

- To achieve security
- hide certain details and only show the important details of an object.

---

- To access the abstract class, it must be inherited from another class.
- The abstract keyword is a non-access modifier, used for classes and methods:

  - `Abstract class`: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).

  - `Abstract method`: can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (inherited from).

---

```java

abstract class Animal {
  public abstract void animalSound(); //No body
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");// The body of animalSound() is provided here
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}
```
