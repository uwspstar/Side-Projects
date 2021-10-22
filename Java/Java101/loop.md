---
marp: true
theme: default
paginate: true
size: 16:9
---

```java
String[] cars = {"Volvo", "BMW", "Ford"};
for (String i :  cars) {
  System.out.println(i);
}

for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

for (type variableName : arrayName) {
  // code block to be executed
}
```

---

```java
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  System.out.println(i);
}

for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  System.out.println(i);
}
```
