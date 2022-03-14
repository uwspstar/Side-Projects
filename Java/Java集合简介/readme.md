# Java 集合简介

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265109905179456
- Java 的集合类定义在 `java.util` 包中，支持泛型，主要提供了 3 种集合类，包括 `List`，`Set` 和 `Map`。Java 集合使用统一的 `Iterator` 遍历，`***` 尽量不要使用遗留接口。

---

### Collection

- Java 标准库自带的 `java.util` 包提供了集合类：`Collection`，它是除 `Map` 外所有其他集合类的根接口。

---

### Java 的 java.util 包主要提供了以下三种类型的集合：

- `List`：一种有序列表的集合，例如，按索引排列的 Student 的 List；
- `Set`：一种保证没有重复元素的集合，例如，所有无重复名称的 Student 的 Set；
- `Map`：一种通过键值（key-value）查找的映射表集合，例如，根据 Student 的 name 查找对应 Student 的 Map。

---

### Java 集合的设计有几个特点：

- 一是实现了接口和实现类相分离，例如，有序表的接口是 List，具体的实现类 ArrayList，LinkedList 等，
- 二是支持泛型，我们可以限制在一个集合中只能放入同一种数据类型的元素.
- 最后，Java 访问集合总是通过统一的方式——迭代器（Iterator）来实现，它最明显的好处在于无需知道集合内部元素是按什么方式存储的。

---

### 我们要注意到有一小部分集合类是遗留类，不应该继续使用：

Hashtable：一种线程安全的 Map 实现；
Vector：一种线程安全的 List 实现；
Stack：基于 Vector 实现的 LIFO 的栈。

---

### 还有一小部分接口是遗留接口，也不应该继续使用：

- Enumeration<E>：已被 Iterator<E>取代。

---

### List

- 是最基础的一种集合：它是一种`有序列表`, 通常情况下，我们总是`优先使用` `ArrayList`。
- List 接口并非只能通过数组（即 `ArrayList` 的实现方式）来实现，另一种 `LinkedList` 通过“链表”也实现了 List 接口。在 `LinkedList` 中，它的内部每个元素都指向下一个元素
- List 接口允许我们添加重复的元素
- List 还允许添加 null

---

### 创建 List

- 除了使用 `ArrayList` 和 `LinkedList`，我们还可以通过 `List` 接口提供的 `of()`方法，根据给定元素快速创建 List：

`List<Integer> list = List.of(1, 2, 5);`

- 但是 `List.of()`方法不接受 `null` 值，如果传入 `null`，会抛出 `NullPointerException` 异常。

---

### 遍历一个 List

- 以我们要始终坚持使用迭代器 `Iterator` 来访问 List。`Iterator` 本身也是一个对象，但它是由 `List` 的实例调用 `iterator()`方法的时候创建的。`Iterator` 对象知道如何遍历一个 `List`，并且不同的 `List` 类型，返回的 `Iterator` 对象实现也是不同的，但总是具有最高的访问效率。
- Iterator 对象有两个方法：`boolean hasNext()` 判断是否有下一个元素，`E next()` 返回下一个元素。因此，使用 Iterator 遍历 List 代码如下

```java
for (Iterator<String> it = list.iterator(); it.hasNext(); ) {
            String s = it.next()
```

- Java 的 for each 循环本身就可以帮我们使用 Iterator 遍历
  `for (String s : list)`

---

- 完全可以用 `for` 循环根据索引配合 `get(int)` 方法遍历, 但这种方式`并不推荐`，一是代码复杂，二是因为`get(int)方法只有ArrayList的实现是高效的`，换成 `LinkedList` 后，索引越大，访问速度越慢。

```java
for (int i=0; i<list.size(); i++) {
    String s = list.get(i);
}
```

---

### 遍历 List 的常见代码。

- 实际上，只要实现了`Iterable`接口的集合类都可以直接用`for each`循环来遍历，`Java`编译器本身并不知道如何遍历集合对象，但它会自动把`for each`循环变成`Iterator`的调用，原因就在于`Iterable`接口定义了一个`Iterator<E> iterator()`方法，强迫集合类必须返回一个`Iterator`实例。

---

### ArrayList

- 在实际应用中，需要增删元素的有序列表，我们使用最多的是 `ArrayList`。实际上，`ArrayList` 在`内部使用了数组来存储所有元素`。例如，一个 `ArrayList` 拥有 5 个元素，实际数组大小为 6（即有一个空位）：
- ArrayList 把添加和删除的操作封装起来，让我们操作 List 类似于操作数组，却不用关心内部元素如何移动
- 没有空闲位置的时候，ArrayList 先创建一个更大的新数组，然后把旧数组的所有元素复制到新数组，紧接着用新数组取代旧数组：

---

### List<E>接口，可以看到几个主要的接口方法：

- 在末尾添加一个元素：`boolean add(E e)`
- 在指定索引添加一个元素：`boolean add(int index, E e)`
- 删除指定索引的元素：`E remove(int index)`
- 删除某个元素：`boolean remove(Object e)`
- 获取指定索引的元素：`E get(int index)`
- 获取链表大小（包含元素的个数）：`int size()`

---

### LinkedList

---

### List 和 Array 转换

---

### 把 List 变为 Array 有三种方法

- 第一种是调用 toArray()方法直接返回一个 Object[]数组：这种方法会丢失类型信息，所以实际应用很少。

```java
List<String> list = List.of("apple", "pear", "banana");
Object[] array = list.toArray();
```

---

- 第二种方式是给 toArray(T[])传入一个类型相同的 Array，List 内部自动把元素复制到传入的 Array 中：这个`toArray(T[])`方法的泛型参数`<T>`并不是List接口定义的泛型参数`<E>`，所以，我们实际上可以传入其他类型的数组，例如我们传入Number类型的数组，返回的仍然是Number类型：

```java
List<Integer> list = List.of(12, 34, 56);
Integer[] array = list.toArray(new Integer[3]);
```
