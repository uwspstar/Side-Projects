---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_inheritance.asp

# Inheritance

Why And When To Use "Inheritance"?

- It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.

---

- group the "inheritance concept" into two categories:

  - `subclass (child)` - the class that inherits from another class
  - `superclass (parent)` - the class being inherited from

- To inherit from a class, use the `extends` keyword.

---

```java
class Vehicle {
  protected String brand = "Ford";        // protected Vehicle attribute
  public void honk() {                    // Vehicle method
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";    // Car attribute
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.honk();// Call the honk() method (from the Vehicle class) on the myCar object
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}
```

---

# final

- If you don't want other classes to inherit from a class, use the final keyword:
