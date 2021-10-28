---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_polymorphism.asp

# Polymorphism : means "many forms"

- Polymorphism means "many forms", and it occurs when w`e have many classes that are related to each other by inheritance.

---

# Inheritance vs Polymorphism

- `Inheritance` lets us inherit attributes and methods from another class. we use the `extends` keyword to inherit from a class.
- `Polymorphism` uses those methods to perform different tasks. This allows us to perform a single action in different ways.

---

```java
class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}
```

---

# Why And When To Use "Inheritance" and "Polymorphism"?

- It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.
