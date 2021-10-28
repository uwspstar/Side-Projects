---
marp: true
theme: default
paginate: true
size: 16:9
---

- https://www.w3schools.com/java/java_packages.asp

# Packages & API

- A package in Java is used to group related classes.
- Think of it as a folder in a file directory.
- We use packages to avoid name conflicts, and to write a better maintainable code.
- Packages are divided into two categories:
  - `Built-in Packages (packages from the Java API)`
    - The complete list can be found at Oracles website: `https://docs.oracle.com/javase/8/docs/api/`.
  - `User-defined Packages (create your own packages)`

---

# packages and classes

- The library is divided into packages and classes.
- Meaning you can either `import` a single class (along with its methods and attributes), or a whole `package` that contain all the classes that belong to the specified package.

- To use a `class` or a `package` from the `library`, you need to use the `import` keyword:
  `import package.name.Class; // Import a single class`
  `import java.util.Scanner; // Import a single class`
  `import package.name.*; // Import the whole package`
  `import java.util.*; // Import the whole package`

---

# User-defined Packages

- To create your own package, you need to understand that Java uses a file system directory to store them.
- Just like folders on your computer:

---

```java
Example
└── root
  └── mypack
    └── MyPackageClass.java
```

To create a package, use the package keyword: MyPackageClass.java

```java
package mypack;
class MyPackageClass {
  public static void main(String[] args) {
    System.out.println("This is my package!");
  }
}
```

-

---

- Save the file as MyPackageClass.java, and compile it:

  - `C:\Users\Your Name>javac MyPackageClass.java`

- Then compile the package:

  - `C:\Users\Your Name>javac -d . MyPackageClass.java`

- run the MyPackageClass.java file, write the following:

  - `C:\Users\Your Name>java mypack.MyPackageClass`
