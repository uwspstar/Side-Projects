---
marp: true
theme: default
header: 'java'
footer: 'https://www.liaoxuefeng.com/'
paginate: true
size: 16:9
---

# Java 教程

- https://www.liaoxuefeng.com/wiki/1252599548343744
- https://www.youtube.com/watch?v=CuOfO9tDVbU&list=PLD3Xyx6ef38yAdTNXD7ntDlaarf8NEoZ4

---

# JDK : JAVA_HOME 的 bin 目录下可执行文件：

- `java`：这个可执行程序其实就是 JVM，运行 Java 程序，就是启动 JVM，然后让 JVM 执行指定的编译后的代码；
- `javac`：这是 Java 的编译器，它用于把 Java 源码文件（以.java 后缀结尾）编译为 Java 字节码文件（以.class 后缀结尾）；
- `jar`：用于把一组.class 文件打包成一个.jar 文件，便于发布；
- `javadoc`：用于从 Java 源码中自动提取注释并生成文档；
- `jdb`：Java 调试器，用于开发阶段的运行调试。

---

# public static void main(String[] args)

- 一个 Java 源码只能定义一个 public 类型的 class，并且 class 名称和文件名要完全一致；
- Java 规定，某个类定义的`public static void main(String[] args)`是 Java 程序的固定入口方法，因此，Java 程序总是从 main 方法开始执行。
- 方法是可执行的代码块，一个方法除了方法名 `main`，还有用`()`括起来的方法参数，这里的 `main` 方法有一个参数，参数类型是 `String[]`，参数名是 `args`，`public`、`static` 用来修饰方法，这里表示它是一个公开的静态方法，`void` 是方法的返回类型，而花括号`{}`中间的就是方法的代码。

---

# 如何运行 Java 程序

- https://www.liaoxuefeng.com/wiki/1252599548343744/1255878730977024
- source code (Hello.java) -> complier -> byte code (Hello.class) -> execute -> Run JVM
- 可执行文件`javac`是编译器，而可执行文件 java 就是虚拟机。

---

# 变量和数据类型

```java
public class Main {
    public static void main(String[] args) {
        int n = 100; // 定义变量n，同时赋值为100
        n = 200; // 变量n赋值为200
        int x = n; // 变量x赋值为n（n的值为200，因此赋值后x的值也是200）
        x = x + 100; // 变量x赋值为x+100（x的值为200，因此赋值后x的值是200+100=300）
        System.out.println("x = " + x); // 打印x的值 300
        System.out.println("n = " + n); // 再次打印n的值，n应该是200还是300？ 200
   }
}

```

---

# 执行

- 执行 int n = 100;，该语句定义了变量 n，同时赋值为 100，因此，JVM 在内存中为变量 n 分配一个“存储单元”，填入值 100：
- 执行 n = 200;时，JVM 把 200 写入变量 n 的存储单元，因此，原有的值被覆盖，现在 n 的值为 200：
- 执行 int x = n;时，定义了一个新的变量 x，同时对 x 赋值，因此，JVM 需要新分配一个存储单元给变量 x，并写入和变量 n 一样的值，结果是变量 x 的值也变为 200：
- 执行 x = x + 100;时，JVM 首先计算等式右边的值 x + 100，结果为 300（因为此刻 x 的值为 200），然后，将结果 300 写入 x 的存储单元，因此，变量 x 最终的值变为 300：

---

# 基本数据类型 : 基本数据类型是 CPU 可以直接进行运算的类型 8

- 整数类型：byte，short，int，long
- 浮点数类型：float，double
- 字符类型：char
- 布尔类型：boolean

---

# Java 定义的这些基本数据类型有什么区别呢？

- 要了解这些区别，我们就必须简单了解一下计算机内存的基本结构。
- https://www.liaoxuefeng.com/wiki/1252599548343744/1255883729079552

---

# 计算机内存的基本结构

- bit (0, 1) 二进制数
- `计算机内存的最小存储单元是字节 byte (NOT bit) `，一个字节就是一个`8位`二进制数，即`8个bit`。它的二进制表示范围从 `00000000~11111111`，换算成十进制是 `0~255`，换算成十六进制是 `00~ff`。 // bytedance
- `一个字节是 1byte，1024 字节是 1K，1024K 是 1M，1024M 是 1G，1024G 是 1T`
