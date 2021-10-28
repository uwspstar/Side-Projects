---
marp: true
theme: default
paginate: true
size: 16:9
---

# Encapsulation

- The meaning of `Encapsulation`, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

  - declare class `variables/attributes` as `private`, `private = restricted access`
  - provide `public get and set` methods to access and update the value of a private variable

---

# Why Encapsulation?

- Better control of class attributes and methods
- Class attributes can be made `read-only` (if you only use the get method), or `write-only` (if you only use the set method)
- Flexible: the programmer can change one part of the code without affecting other parts
  Increased security of data

---

# Get and Set

```java
public class Person {
  private String name; // private = restricted access

  public String getName() {// Getter
    return name;
  }

  public void setName(String newName) {// Setter
    this.name = newName;
  }
}
```
