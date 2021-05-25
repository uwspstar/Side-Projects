---
marp: true
theme: default
header: 'java https://www.liaoxuefeng.com/'
footer: 'https://www.liaoxuefeng.com/'
paginate: true
size: 16:9
---

# Java 教程

- https://introcs.cs.princeton.edu/java/11cheatsheet/
- https://www.liaoxuefeng.com/wiki/1252599548343744
- https://www.youtube.com/watch?v=CuOfO9tDVbU&list=PLD3Xyx6ef38yAdTNXD7ntDlaarf8NEoZ4
- https://www.youtube.com/watch?v=HlYMFwJ5QuY&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f

---

### JDK : JAVA_HOME 的 bin 目录下可执行文件：

- `java`：这个可执行程序其实就是 JVM，运行 Java 程序，就是启动 JVM，然后让 JVM 执行指定的编译后的代码；
- `javac`：这是 Java 的编译器，它用于把 Java 源码文件（以.java 后缀结尾）编译为 Java 字节码文件（以.class 后缀结尾）；
- `jar`：用于把一组.class 文件打包成一个.jar 文件，便于发布；
- `javadoc`：用于从 Java 源码中自动提取注释并生成文档；
- `jdb`：Java 调试器，用于开发阶段的运行调试。

---

### public static void main(String[] args)

- 一个 Java 源码只能定义一个 public 类型的 class，并且 class 名称和文件名要完全一致；
- Java 规定，某个类定义的`public static void main(String[] args)`是 Java 程序的固定入口方法，因此，Java 程序总是从 main 方法开始执行。
- 方法是可执行的代码块，一个方法除了方法名 `main`，还有用`()`括起来的方法参数，这里的 `main` 方法有一个参数，参数类型是 `String[]`，参数名是 `args`，`public`、`static` 用来修饰方法，这里表示它是一个公开的静态方法，`void` 是方法的返回类型，而花括号`{}`中间的就是方法的代码。

---

### 如何运行 Java 程序

- https://www.liaoxuefeng.com/wiki/1252599548343744/1255878730977024
- source code (Hello.java) -> complier -> byte code (Hello.class) -> execute -> Run JVM
- 可执行文件`javac`是编译器，而可执行文件 java 就是虚拟机。

---

```
┌──────────────────┐
│    Hello.java    │<─── source code
└──────────────────┘
          │ compile
          ▼
┌──────────────────┐
│   Hello.class    │<─── byte code
└──────────────────┘
          │ execute
          ▼
┌──────────────────┐
│    Run on JVM    │
└──────────────────┘
```

---

### Difference between an Integer and int in Java

- https://www.tutorialspoint.com/difference-between-an-integer-and-int-in-java

---

### 变量和数据类型

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

### 执行

- 执行 int n = 100;，该语句定义了变量 n，同时赋值为 100，因此，JVM 在内存中为变量 n 分配一个“存储单元”，填入值 100：
- 执行 n = 200;时，JVM 把 200 写入变量 n 的存储单元，因此，原有的值被覆盖，现在 n 的值为 200：
- 执行 int x = n;时，定义了一个新的变量 x，同时对 x 赋值，因此，JVM 需要新分配一个存储单元给变量 x，并写入和变量 n 一样的值，结果是变量 x 的值也变为 200：
- 执行 x = x + 100;时，JVM 首先计算等式右边的值 x + 100，结果为 300（因为此刻 x 的值为 200），然后，将结果 300 写入 x 的存储单元，因此，变量 x 最终的值变为 300：

---

### 基本数据类型 : 基本数据类型是 CPU 可以直接进行运算的类型 8

- 整数类型：byte (1byte)，short(2byte)，int(4byte)，long(8byte)
- 浮点数类型：float(4byte)，double(8byte)
- 字符类型：char(2byte)
- 布尔类型：boolean

---

### Java 定义的这些基本数据类型有什么区别呢？

- 要了解这些区别，我们就必须简单了解一下计算机内存的基本结构。
- https://www.liaoxuefeng.com/wiki/1252599548343744/1255883729079552

---

### 计算机内存的基本结构

- bit (0, 1) 二进制数
- `计算机内存的最小存储单元是字节 byte (NOT bit) `，一个字节就是一个`8位`二进制数，即`8个bit`。它的二进制表示范围从 `00000000~11111111`，换算成十进制是 `0~255`，换算成十六进制是 `00~ff`。 // bytedance
- `一个字节是 1byte，1024 字节是 1K，1024K 是 1M，1024M 是 1G，1024G 是 1T`

---

#

```
       ┌───┐
  byte │   │ 1 byte
       └───┘
       ┌───┬───┐
 short │   │   │
       └───┴───┘
       ┌───┬───┬───┬───┐
   int │   │   │   │   │ 4 byte (default)
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
  long │   │   │   │   │   │   │   │   │ 8 byte
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┬───┬───┐
 float │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
double │   │   │   │   │   │   │   │   │ 8 byte
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┐
  char │   │   │ 2 byte
       └───┴───┘
```

---

- JVM 内部会把 `boolean 表示为 4 字节整数`。

### 布尔类型

- 布尔类型 boolean 只有 true 和 false 两个值
- Java 语言对布尔类型的存储并没有做规定，因为理论上存储布尔类型只需要 1 bit，但是通常 JVM 内部会把 `boolean 表示为 4 字节整数`。

---

### 整型类型

- Java 只定义了带符号的整型，因此，最高位的 bit 表示符号位（`0表示正数，1表示负数`）
- byte：-128 ~ 127 (+-, 1 1 1 1 1 1 1) (8 bits)
- short: -32768 ~ 32767 (2 \* bits)
- int: -2147483648 ~ 2147483647 (4 \* 8bits)
- long: -9223372036854775808 ~ 9223372036854775807 (8 \* 8bits) long 型的结尾需要加 L

---

### 浮点型

- 浮点类型的数就是小数，因为小数用科学计数法表示的时候，小数点是可以“浮动”的，如 1234.5 可以表示成 12.345x102，也可以表示成 1.2345x103，所以称为`浮点数。`
- 对于 float 类型，需要加上 f 后缀

---

### 字符类型

- 字符类型 char 表示一个字符。
- Java 的 char 类型除了可表示标准的`ASCII`外，还可以表示一个`Unicode`字符
- 注意 char 类型使用单引号'，且仅有一个字符，要和双引号"的字符串类型区分开。

---

### 引用类型

- 除了基本类型的变量，剩下的都是引用类型。
- 例如，引用类型最常用的就是`String字符串`：

---

### 常量

- 定义变量的时候，如果加上 final 修饰符，这个变量就变成了常量.
- 常量名通常全部大写

### var 关键字

- `var sb = new StringBuilder();`

---

### 运算优先级

```
()
! ~ ++ --
* / %
+ -
<< >> >>>
&
|
+= -= *= /=
```

---

### 整数运算

- 特别注意：整数的除法对于除数为 0 时运行时将报错，但编译不会报错。
- 要特别注意，整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出不会出错，却会得到一个奇怪的结果：

---

### ++n vs n++

- 注意++写在前面和后面计算结果是不同的，++n 表示先加 1 再引用 n，n++表示先引用 n 再加 1。不建议把++运算混入到常规运算中，容易自己把自己搞懵了。

---

### 移位运算 >> << >>> <<<

- 左移实际上就是不断地 ×2，右移实际上就是不断地 ÷2。
- https://www.liaoxuefeng.com/wiki/1252599548343744/1255888634635520
- 对 byte 和 short 类型进行移位时，会首先转换为 int 再进行位移。

---

### 位运算 : 位运算是按位进行与、或、非和异或的运算。

- 对两个整数进行位运算，实际上就是按位对齐，然后依次对每一位进行运算
- 与运算的规则是，必须两个数同时为 1，结果才为 1：

```
n = 0 & 0; // 0
n = 0 & 1; // 0
n = 1 & 0; // 0
n = 1 & 1; // 1
```

---

- 或运算的规则是，只要任意一个为 1，结果就为 1：

```
n = 0 | 0; // 0
n = 0 | 1; // 1
n = 1 | 0; // 1
n = 1 | 1; // 1
```

---

- 非运算的规则是，0 和 1 互换：

```
n = ~0; // 1
n = ~1; // 0
```

---

- 异或运算的规则是，如果两个数不同，结果为 1，否则为 0：

```
n = 0 ^ 0; // 0
n = 0 ^ 1; // 1
n = 1 ^ 0; // 1
n = 1 ^ 1; // 0
```

---

### 类型自动提升与强制转型

- 在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为较大类型的整型。例如，short 和 int 计算，结果总是 int，原因是 short 首先自动被转型为 int：
- 强制转型的结果很可能是错的。强制转型使用(类型)，例如，将 int 强制转型为 short. 高位字节直接被扔掉，仅保留了低位的

---

### 由于浮点数存在运算误差，所以比较两个浮点数是否相等常常会出现错误的结果。

- 正确的比较方法是判断两个浮点数之差的绝对值是否小于一个很小的数：

```
// 比较x和y是否相等，先计算其差的绝对值:
double r = Math.abs(x - y);
// 再判断绝对值是否足够小:
if (r < 0.00001) {
    // 可以认为相等
} else {
    // 不相等
}
```

---

### 溢出

- 整数运算在除数为 0 时会报错，而浮点数运算在除数为 0 时，不会报错，但会返回几个特殊值：

```
NaN表示Not a Number
Infinity表示无穷大
-Infinity表示负无穷大
```

---

### 短路运算

- 与运算和或运算是短路运算；
- 布尔运算的一个重要特点是短路运算。如果一个布尔运算的表达式能提前确定结果，则后续的计算不再执行，直接返回结果。

---

### 三元运算

- 三元运算 b ? x : y 后面的类型必须相同，三元运算也是“短路运算”，只计算 x 或 y。
- `b ? x : y`会首先计算 b，如果 b 为 true，则只计算 x，否则，只计算 y。此外，x 和 y 的类型必须相同，因为返回值不是 boolean，而是 x 和 y 之一。

---

### 字符和字符串

- 一个`char`保存一个`Unicode`字符：
- 因为 Java 在内存中总是使用 Unicode 表示字符，所以，一个英文字符和一个中文字符都用一个 char 类型表示，`它们都占用两个字节`。
- 要显示一个字符的 Unicode 编码，只需将 char 类型直接赋值给 int 类型即可
- 转义字符`\`

---

```
执行String s = "hello";时，JVM虚拟机先创建字符串"hello"，然后，把字符串变量s指向它：

      s
      │
      ▼
┌───┬───────────┬───┐
│   │  "hello"  │   │
└───┴───────────┴───┘
紧接着，执行s = "world";时，JVM虚拟机先创建字符串"world"，然后，把字符串变量s指向它：

      s ──────────────┐
                      │
                      ▼
┌───┬───────────┬───┬───────────┬───┐
│   │  "hello"  │   │  "world"  │   │
└───┴───────────┴───┴───────────┴───┘
原来的字符串"hello"还在，只是我们无法通过变量s访问它而已。因此，字符串的不可变是指字符串内容不可变
```

---

### 常见的转义字符包括：

```
\" 表示字符"
\' 表示字符'
\\ 表示字符\
\n 表示换行符
\r 表示回车符
\t 表示Tab
\u#### 表示一个Unicode编码的字符
```

---

### Unicode, UTF-8, and ASCII

- https://medium.com/@apiltamang/unicode-utf-8-and-ascii-encodings-made-easy-5bfbe3a1c45a

---

### Java 的数组有几个特点：

- 数组所有元素初始化为默认值，整型都是 0，浮点型是 0.0，布尔型是 false；
  数组一旦创建后，大小就不可改变。

```
int[] ns = new int[] { 68, 79, 91, 85, 62 };
int[] ns = { 68, 79, 91, 85, 62 };
```

```
int[] ns = new int[5];
```

---

---

### 数组

```
数组大小变了吗？看上去好像是变了，但其实根本没变。

对于数组ns来说，执行ns = new int[] { 68, 79, 91, 85, 62 };时，它指向一个5个元素的数组：

     ns
      │
      ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │68 │79 │91 │85 │62 │   │
└───┴───┴───┴───┴───┴───┴───┘
执行ns = new int[] { 1, 2, 3 };时，它指向一个新的3个元素的数组：

     ns ──────────────────────┐
                              │
                              ▼
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│   │68 │79 │91 │85 │62 │   │ 1 │ 2 │ 3 │   │
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
但是，原有的5个元素的数组并没有改变，只是无法通过变量ns引用到它们而已
```

---

### 字符串数组

- https://www.liaoxuefeng.com/wiki/1252599548343744/1255941599809248

```
String[] names = {
    "ABC", "XYZ", "zoo"
};
```

---

```
对于String[]类型的数组变量names，它实际上包含3个元素，但每个元素都指向某个字符串对象：

          ┌─────────────────────────┐
    names │   ┌─────────────────────┼───────────┐
      │   │   │                     │           │
      ▼   │   │                     ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
对names[1]进行赋值，例如names[1] = "cat";，效果如下：

          ┌─────────────────────────────────────────────────┐
    names │   ┌─────────────────────────────────┐           │
      │   │   │                                 │           │
      ▼   │   │                                 ▼           ▼
┌───┬───┬─┴─┬─┴─┬───┬───────┬───┬───────┬───┬───────┬───┬───────┬───┐
│   │░░░│░░░│░░░│   │ "ABC" │   │ "XYZ" │   │ "zoo" │   │ "cat" │   │
└───┴─┬─┴───┴───┴───┴───────┴───┴───────┴───┴───────┴───┴───────┴───┘
      │                 ▲
      └─────────────────┘
这里注意到原来names[1]指向的字符串"XYZ"并没有改变，仅仅是将names[1]的引用从指向"XYZ"改成了指向"cat"，其结果是字符串"XYZ"再也无法通过names[1]访问到了。
```

---

### 格式化输出

- 注意，由于%表示占位符，因此，连续两个%%表示一个%字符本身。
- 使用`System.out.printf()`，通过使用占位符%?，printf()可以把后面的参数格式化成指定格式：

```
double d = 3.1415926;
System.out.printf("%.2f\n", d); // 显示两位小数3.14
System.out.printf("%.4f\n", d); // 显示4位小数3.1416
System.out.printf("n=%d, hex=%08x", n, n); // 一个整数格式化成十六进制，并用0补足8位： 注意，两个%占位符必须传入两个数
```

---

### 输入

- https://www.liaoxuefeng.com/wiki/1252599548343744/1255887264020640

---

### 判断引用类型相等

- 在 Java 中，判断`值类型`的变量是否相等，可以使用==运算符。
- 但是，判断`引用类型`的变量是否相等，必须使用 `equals()`方法. `==`表示“引用是否相等”，或者说，是否指向同一个对象。
- 例如，下面的两个 String 类型，它们的内容是相同的，但是，分别指向不同的对象，用==判断，结果为 false：
- 要判断引用类型的变量内容是否相等，必须使用 equals()方法：
- 要避免`NullPointerException`错误，可以利用短路运算符`&&`：

---

### for each : 能够遍历所有“可迭代”的数据类型，包括后面会介绍的 List、Map 等

- 和 for 循环相比，for each 循环的变量 n 不再是计数器，而是直接对应到数组的每个元素。
- for each 循环的写法也更简洁。但是，for each 循环无法指定遍历顺序，也无法获取数组的索引。
- 除了数组外，for each 循环能够遍历所有“可迭代”的数据类型，包括后面会介绍的 List、Map 等。

---

```java
for (int n : ns) {
      System.out.println(n);
}
```

---

### String concat

```java
int x = 10;
int y = 20

System.out.println("sum" + x + y);//sum1020
System.out.println(x + y + "sum");//30sum
System.out.println("sum" + (x + y));//sum30
```

---

### 打印数组

- 直接打印数组变量，得到的是数组在 JVM 中的引用地址：
- Java 标准库提供了 Arrays.toString()，可以快速打印数组内容
- Java 标准库的 Arrays.deepToString()：打印一个二维数组

```java
int[] ns = { 1, 1, 2, 3, 5, 8 };
System.out.println(ns); // 类似 [I@7852e922
//Java标准库提供了Arrays.toString()，可以快速打印数组内容
System.out.println(Arrays.toString(ns));
```

---

### Arrays.sort()

- https://www.liaoxuefeng.com/wiki/1252599548343744/1259543088592672
- Java 的标准库已经内置了排序功能，我们只需要调用 JDK 提供的 `Arrays.sort()`就可以排序：

```java
int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
Arrays.sort(ns);
System.out.println(Arrays.toString(ns));
```

---

### 必须注意，对数组排序实际上修改了数组本身。

- https://www.liaoxuefeng.com/wiki/1252599548343744/1259543088592672

```
int[] ns = { 9, 3, 6, 5 };
在内存中，这个整型数组表示如下：

      ┌───┬───┬───┬───┐
ns───>│ 9 │ 3 │ 6 │ 5 │
      └───┴───┴───┴───┘
当我们调用Arrays.sort(ns);后，这个整型数组在内存中变为：

      ┌───┬───┬───┬───┐
ns───>│ 3 │ 5 │ 6 │ 9 │
      └───┴───┴───┴───┘
即变量ns指向的数组内容已经被改变了。
```

---

### 字符串数组进行排序

```
如果对一个字符串数组进行排序，例如：

String[] ns = { "banana", "apple", "pear" };
排序前，这个数组在内存中表示如下：

                   ┌──────────────────────────────────┐
               ┌───┼──────────────────────┐           │
               │   │                      ▼           ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────>│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                 ▲
           └─────────────────┘
调用Arrays.sort(ns);排序后，这个数组在内存中表示如下：

                   ┌──────────────────────────────────┐
               ┌───┼──────────┐                       │
               │   │          ▼                       ▼
         ┌───┬─┴─┬─┴─┬───┬────────┬───┬───────┬───┬──────┬───┐
ns ─────>│░░░│░░░│░░░│   │"banana"│   │"apple"│   │"pear"│   │
         └─┬─┴───┴───┴───┴────────┴───┴───────┴───┴──────┴───┘
           │                              ▲
           └──────────────────────────────┘
原来的3个字符串在内存中均没有任何变化，但是ns数组的每个元素指向变化了。
```

---

### 二维数组

- https://www.liaoxuefeng.com/wiki/1252599548343744/1259544232593792

```
int[][] ns = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
        };
System.out.println(ns.length); // 3
```

- 打印一个二维数组 使用 Java 标准库的 Arrays.deepToString()：

---

### 命令行参数

- Java 程序的入口是 main 方法，而 main 方法可以接受一个命令行参数，它是一个 String[]数组。
- String args[] 与 String[] args 都可以执行，但推荐使用 String[] args

---

### Java 的所有代码都必须写 入一个类 class 中

- `import java.util.*;` 需导入一系列类时，采用的通常是这个办法。应尽量避免一个一个地导入类。
- 除非用 `new` 创建那 个类的一个对象，否则实际上并未得到任何东西。只有执行了 `new` 后，才会正 式生成数据存储空间，并可使用相应的方法。

---

### static 关键字

- 即使没有创建对象，也需要一个能调用的方法。为满足这两方面的要求，可 使用 static(静态)关键字。

---

### public vs private

- 外部代码通过 public 方法操作实例，内部代码可以调用 private 方法；
- 如果没有命名冲突，可以省略 this
- 如果有局部变量和字段重名，那么局部变量优先级更高，就必须加上 this：

---

- 可变参数用类型...定义，可变参数相当于数组类型.
- 完全可以把可变参数改写为 String[]类型, 调用方需要自己先构造 String[]，比较麻烦

---

```
class Group {
    private String[] names;

    public void setNames(String... names) {
        this.names = names;
    }
}
Group g = new Group();
g.setNames(" Ming", " Hong", " Jun"); // 传入3个String
g.setNames(" Ming", " Hong"); // 传入2个String
g.setNames(" Ming"); // 传入1个String
g.setNames(); // 传入0个String
```

```
Group g = new Group();
g.setNames(new String[] {"Xiao Ming", "Xiao Hong", "Xiao Jun"}); // 传入1个String[]
```

---

### 独立的数据，互不干扰

```
两个不同的实例，它们在内存中的结构如下：

            ┌──────────────────┐
ming ──────>│Person instance   │
            ├──────────────────┤
            │name = "Xiao Ming"│
            │age = 12          │
            └──────────────────┘
            ┌──────────────────┐
hong ──────>│Person instance   │
            ├──────────────────┤
            │name = "Xiao Hong"│
            │age = 15          │
            └──────────────────┘
两个instance拥有class定义的name和age字段，且各自都有一份独立的数据，互不干扰。
```

---

### 构造方法

- 构造方法的名称就是类名。
- 构造方法的参数没有限制，在方法内部，也可以编写任意语句。
- 但是，和普通方法相比，构造方法没有返回值（也没有 void）
- 调用构造方法，必须用 new 操作符。

---

### 默认构造方法

- 如果一个类没有定义构造方法，编译器会自动为我们生成一个`默认构造方法`，它没有参数，也没有执行语句
- 要特别注意的是，如果我们自定义了一个构造方法，那么，编译器就不再自动创建默认构造方法：

---

- 一个构造方法可以调用其他构造方法，这样做的目的是便于代码复用。调用其他构造方法的语法是 this(…)：

```java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person(String name) {
        this(name, 18); // 调用另一个构造方法Person(String, int)
    }

    public Person() {
        this("Unnamed"); // 调用另一个构造方法Person(String)
    }
}
```

---

### 初始化

- 没有在构造方法中初始化字段时，
- 引用类型的字段默认是 null，
- 数值类型的字段用默认值，int 类型默认值是 0，布尔类型默认值是 false：
- 构造方法的代码由于后运行，所以，new Person("Xiao Ming", 12)的字段值最终由构造方法的代码确定。

---

### 若某个主数据类型属于一个类 class 成员，那么即使不明确(显式)进行初始化，也可以保证它们获得一个默认值. 然而，这种保证却并不适用于“局部”变量——那些变量并非一个类的字段

```
主类型 默认值
Boolean false
Char '\u0000'(null)
byte (byte)0
short (short)0
int 0
long 0L
float 0.0f
double 0.0d
```

---

### Method 方法的基本组成部分包括名字、自变量、返回类型以及主体。

- 下面便是它最 基本的形式:

---

### Overload

- 注意：方法重载的返回值类型通常都是相同的。
- 方法重载的目的是，功能类似的方法使用同一名字，更容易记住，因此，调用起来更简单

### 继承 : Java 使用 extends 关键字来实现继承

- 子类自动获得了父类的所有字段，严禁定义与父类重名的字段！
- 子类无法访问父类的 private 字段或者 private 方法
- 为了让子类可以访问父类的字段，我们需要把 private 改为 protected。用 protected 修饰的字段可以被子类访问：

---

```java
class Person {
    private String name;
    private int age;

    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
}

class Student extends Person {
    // 不要重复name和age字段/方法,
    // 只需要定义新增score字段/方法:
    private int score;

    public int getScore() { … }
    public void setScore(int score) { … }
}
```

---

### protected

- protected 关键字可以把字段和方法的访问权限控制在继承树内部，一个 protected 字段和方法可以被其子类，以及子类的子类所访问，后面我们还会详细讲解。

---

### super

- 编译失败

```
public class Main {
    public static void main(String[] args) {
        Student s = new Student("Xiao Ming", 12, 89);
    }
}

class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        this.score = score;
    }
}

```

---

- 子类不会继承任何父类的构造方法。子类默认的构造方法是编译器自动生成的，不是继承的。
- 如果父类没有默认的构造方法，子类就必须显式调用 super()并给出参数以便让编译器定位到父类的一个合适的构造方法

---

```
在Java中，任何class的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，编译器会帮我们自动加一句super();，所以，Student类的构造方法实际上是这样：

class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        super(); // 自动调用父类的构造方法
        this.score = score;
    }
}
但是，Person类并没有无参数的构造方法，因此，编译失败。
```

---

```
解决方法是调用Person类存在的某个构造方法。例如：

class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        super(name, age); // 调用父类的构造方法Person(String, int)
        this.score = score;
    }
}
这样就可以正常编译了！
```

---

### Java 的注解可以分为三类：

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265102413966176
- 第一类是由编译器使用的注解，例如：

```
@Override：让编译器检查该方法是否正确地实现了覆写；
@SuppressWarnings：告诉编译器忽略此处代码产生的警告。
这类注解不会被编译进入.class 文件，它们在编译后就被编译器扔掉了
```

---

- 第二类是由工具处理.class 文件使用的注解，比如有些工具会在加载 class 的时候，对 class 做动态修改，实现一些特殊的功能。
- 这类注解会被编译进入.class 文件，但加载结束后并不会存在于内存中。
- 这类注解只被一些底层库使用，一般我们不必自己处理。

---

- 第三类是在程序运行期能够读取的注解，它们在加载后一直存在于 JVM 中，这也是最常用的注解。例如，一个配置了@PostConstruct 的方法会在调用构造方法后自动被调用（这是 Java 代码读取该注解实现的功能，JVM 并不会识别该注解）。

---

### Collection

- 既然 Java 提供了数组这种数据类型，可以充当集合，那么，我们为什么还需要其他集合类？这是因为数组有如下限制： - 数组初始化后大小不可变； - 数组只能按索引顺序存取。
- 因此，我们需要各种不同类型的集合类来处理不同的数据，例如： - 可变大小的顺序链表； - 保证无重复元素的集合；

---

### java.util 包提供了集合类 (除 Map 外) 所有其他集合类的根接口。：Collection

- Java 标准库自带的 java.util 包提供了集合类：Collection，它是除 Map 外所有其他集合类的根接口。
- Java 的 java.util 包主要提供了以下三种类型的集合
- List：一种有序列表的集合，例如，按索引排列的 Student 的 List
- Set：一种保证没有重复元素的集合，例如，所有无重复名称的 Student 的 Set
- Map：一种通过键值（key-value）查找的映射表集合，例如，根据 Student 的 name 查找对应 Student 的 Map。

---

### 不应该继续使用集合类：

- Hashtable：一种线程安全的 Map 实现；
- Vector：一种线程安全的 List 实现；
- Stack：基于 Vector 实现的 LIFO 的栈。
  `还有一小部分接口是遗留接口，也不应该继续使用：`
- Enumeration<E>：已被 Iterator<E>取代。

---

### List

- List 接口允许我们添加重复的元素，即 List 内部的元素可以重复
- List 还允许添加 null：

---

### List 接口提供的 of()方法 快速创建 List

- 除了使用 ArrayList 和 LinkedList，我们还可以通过 List 接口提供的 of()方法，根据给定元素快速创建 List：
- 要注意的是，返回的 List 不一定就是 ArrayList 或者 LinkedList，因为 List 只是一个接口，如果我们调用 List.of()，它返回的是一个只读 List：对只读 List 调用 add()、remove()方法会抛出 `UnsupportedOperationException`。

`List<String> list = List.of("apple", "pear", "banana");`

```
Integer[] array = { 1, 2, 3 };
List<Integer> list = List.of(array);
```

---

### 遍历一个 List : 要始终坚持使用迭代器 `Iterator` 来访问 `List`

- 遍历一个 List，完全可以用 for 循环根据索引配合 get(int)方法遍历. 但这种方式`并不推荐`，一是代码复杂，二是因为`get(int)`方法只有`ArrayLis`t 的实现是高效的，换成`LinkedList`后，索引越大，访问速度越慢。
- 所以我们要始终坚持使用迭代器 `Iterator` 来访问 `List`

---

### 始终坚持使用迭代器 Iterator 来访问 List, 具有最高的访问效率

- `Iterator`本身也是一个对象，但它是由`List` 的实例调用`iterator()`方法的时候创建的。
- `Iterator`对象知道如何遍历一个`List`，并且不同的`List`类型，返回的`Iterator`对象实现也是不同的，但总是具有`最高的访问效率`。

---

### Iterator 对象有两个方法

- Iterator 对象有两个方法：boolean hasNext()判断是否有下一个元素，E next()返回下一个元素。

```java
List<String> list = List.of("apple", "pear", "banana");
for (Iterator<String> it = list.iterator(); it.hasNext(); ) { // for (; ; ;)
    String s = it.next();
    System.out.println(s);
}
```

---

### 可能觉得使用 Iterator 访问 List 的代码比使用索引更复杂。但是，要记住，通过 Iterator 遍历 List 永远是最高效的方式

- 但是，要记住，通过 Iterator 遍历 List 永远是最高效的方式。并且，由于 Iterator 遍历是如此常用，所以，Java 的`for each`循环本身就可以帮我们使用`Iterator`遍历。

```java
List<String> list = List.of("apple", "pear", "banana");
for (String s : list) {
    System.out.println(s);
}
```

---

### 只要实现了 Iterable 接口的集合类都可以直接用 for each 循环来遍历，

- 只要实现了 Iterable 接口的集合类都可以直接用 for each 循环来遍历
- Java 编译器本身并不知道如何遍历集合对象，但它会自动把 for each 循环变成 Iterator 的调用，原因就在于 `Iterable` 接口定义了一个 `Iterator<E> iterator()`方法，强迫集合类必须返回一个 `Iterator` 实例。

---

### 把 Array 变为 List 简单 通过 List.of(T...)

- 把 Array 变为 List 就简单多了，通过 `List.of(T...)`方法最简单：

```java
Integer[] array = { 1, 2, 3 };
List<Integer> list = List.of(array);
```

---

### List 和 Array 转换 有三种方法，第一种 (这种方法会丢失类型信息，所以实际应用很少。)

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265112034799552
- 第一种是调用 `toArray()`方法直接返回一个 Object[]数组：这种方法会丢失类型信息，所以实际应用很少。

```
List<String> list = List.of("apple", "pear", "banana");
Object[] array = list.toArray();
for (Object s : array) {
    System.out.println(s);
}
```

---

### List 和 Array 转换 有三种 方法 第二种方式

- 是给 toArray(T[])传入一个类型相同的 Array，List 内部自动把元素复制到传入的 Array 中.
  `Integer[] array = list.toArray(new Integer[3]);`
- 注意到这个 toArray(T[])方法的泛型参数<T>并不是 List 接口定义的泛型参数<E>，所以，我们实际上可以传入其他类型的数组，
- 例如我们传入 Number 类型的数组，返回的仍然是 Number 类型：
  `Number[] array = list.toArray(new Number[3]);`

---

### 传入类型不匹配的数组 : ArrayStoreException

- 如果我们传入类型不匹配的数组，例如，String[]类型的数组，由于 List 的元素是 Integer，所以无法放入 String 数组，这个方法会抛出 ArrayStoreException。

---

### 最常用的是传入一个“恰好”大小的数组：

- 如果传入的数组不够大，那么 List 内部会创建一个新的刚好够大的数组，填充后返回；如果传入的数组比 List 元素还要多，那么填充完元素后，剩下的数组元素一律填充 null

---

### 最后一种更简洁的写法

- 是通过 List 接口定义的 T[] toArray(IntFunction<T[]> generator)方法：

`Integer[] array = list.toArray(Integer[]::new);`

---

### contains : List 内部并不是通过==判断两个元素是否相等，而是使用 equals()方法判断两个元素是否相等

- List 还提供了 boolean contains(Object o)方法来判断 List 是否包含某个指定元素。
- 此外，int indexOf(Object o)方法可以返回某个元素的索引，如果元素不存在，就返回-1。
- List 内部并不是通过==判断两个元素是否相等，而是使用 equals()方法判断两个元素是否相等

---

### 正确使用 List 的 contains()、indexOf()这些方法, 必须正确覆写 equals()方法

- 正确使用 List 的 contains()、indexOf()这些方法，放入的实例必须正确覆写 equals()方法，否则，放进去的实例，查找不到。
- 我们之所以能正常放入 String、Integer 这些对象，是因为 Java 标准库定义的这些类已经正确实现了 equals()方法。

---

### 对于引用字段比较，我们使用 equals()，对于基本类型字段的比较，我们使用==。

---

### 编写 equals : 如何正确编写 equals()方法？equals()方法要求我们必须满足以下条件：

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265116446975264
- 自反性（Reflexive）：对于非 null 的 x 来说，x.equals(x)必须返回 true；
- 对称性（Symmetric）：对于非 null 的 x 和 y 来说，如果 x.equals(y)为 true，则 y.equals(x)也必须为 true；
- 传递性（Transitive）：对于非 null 的 x、y 和 z 来说，如果 x.equals(y)为 true，y.equals(z)也为 true，那么 x.equals(z)也必须为 true；
- 一致性（Consistent）：对于非 null 的 x 和 y 来说，只要 x 和 y 状态不变，则 x.equals(y)总是一致地返回 true 或者 false；
  对 null 的比较：即 x.equals(null)永远返回 false。

---

```java
public boolean equals(Object o) {
    if (o instanceof Person) {
        Person p = (Person) o;
        boolean nameEquals = false;
        if (this.name == null && p.name == null) {
            nameEquals = true;
        }
        if (this.name != null) {
            nameEquals = this.name.equals(p.name);
        }
        return nameEquals && this.age == p.age;
    }
    return false;
}
```

---

### 简化引用类型的比较，我们使用 Objects.equals()静态方法

```java
public class Person {
    public String name;
    public int age;
}
```

```java
if (o instanceof Person) {
    Person p = (Person) o;
    return Objects.equals(this.name, p.name) && this.age == p.age;
}
return false;
```

---

### 总结一下 equals()方法的正确编写方法：

- 先确定实例“相等”的逻辑，即哪些字段相等，就认为实例相等；
- 用 instanceof 判断传入的待比较的 Object 是不是当前类型，如果是，继续比较，否则，返回 false；
- 对引用类型用 Objects.equals()比较，对基本类型直接用==比较。
- 使用 Objects.equals()比较两个引用类型是否相等的目的是省去了判断 null 的麻烦。两个引用类型都是 null 时它们也是相等的。
- 如果不调用 List 的 contains()、indexOf()这些方法，那么放入的元素就不需要实现 equals()方法。

---

### ArrayList

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265112034799552
- 在实际应用中，需要`增` `删` 元素的有序列表，我们使用最多的是`ArrayList`。
- 实际上，ArrayList 在内部使用了数组来存储所有元素。
- 当添加一个元素并指定索引到 ArrayList 时，ArrayList 自动移动需要移动的元素
- 继续添加元素，但是数组已满，没有空闲位置的时候，ArrayList 先创建一个更大的新数组，然后把旧数组的所有元素复制到新数组，紧接着用新数组取代旧数组：

---

### LinkedList

- 但是，实现 List 接口并非只能通过数组（即 ArrayList 的实现方式）来实现，另一种 LinkedList 通过“链表”也实现了 List 接口。在 LinkedList 中，它的内部每个元素都指向下一个元素：

---

### 比较一下 ArrayList 和 LinkedList：

- 通常情况下，我们总是优先使用 ArrayList。

```
                        ArrayList	            LinkedList
获取指定元素	            速度很快	             需要从头开始查找元素
添加元素到末尾	            速度很快	             速度很快
在指定位置添加/删除	        需要移动元素	           不需要移动元素
内存占用	                少	                    较大
```

---

### Map

- 和 List 类似，Map 也是一个接口，最常用的实现类是 HashMap。
- 通过一个键去查询对应的值。使用 List 来实现存在效率非常低的问题，因为平均需要扫描一半的元素才能确定，而 Map 这种键值（key-value）映射表的数据结构，作用就是能高效通过 key 快速查找 value（元素）。
- Map<K, V>是一种键-值映射表，当我们调用 put(K key, V value)方法时，就把 key 和 value 做了映射并放入 Map。当我们调用 V get(K key)时，就可以通过 key 获取到对应的 value。如果 key 不存在，则返回 null。
- 如果只是想查询某个 key 是否存在，可以调用 `boolean containsKey(K key)`方法。

---

### 遍历 Map

- 对 Map 来说，要遍历 key 可以使用 for each 循环遍历 Map 实例的 keySet()方法返回的 Set 集合，它包含不重复的 key 的集合：

```java
for (String key : map.keySet()) {
    Integer value = map.get(key);
    System.out.println(key + " = " + value);
}
```

---

### 同时遍历 key 和 value

- 同时遍历 key 和 value 可以使用 for each 循环遍历 Map 对象的 entrySet()集合，它包含每一个 key-value 映射：

```java
import java.util.HashMap;
import java.util.Map;
...
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    Integer value = entry.getValue();
    System.out.println(key + " = " + value);
}
```

---

### Map vs. List

- Map 和 List 不同的是，Map 存储的是 key-value 的映射关系，并且，它不保证顺序。
- 在遍历的时候，遍历的顺序既不一定是 put()时放入的 key 的顺序，也不一定是 key 的排序顺序。
- 使用 Map 时，任何依赖顺序的逻辑都是不可靠的。以 HashMap 为例，假设我们放入"A"，"B"，"C"这 3 个 key，遍历的时候，每个 key 会保证被遍历一次且仅遍历一次，但顺序完全没有保证，甚至对于不同的 JDK 版本，相同的代码遍历的输出顺序都是不同的.

---

### HashMap 之所以能根据 key 直接拿到 value

- 原因是它内部通过空间换时间的方法，用一个大数组存储所有 value，并根据 key 直接计算出 value 应该存储在哪个索引：
- 当我们使用 key 存取 value 的时候，就会引出一个问题：我们放入 Map 的 key 是字符串"a"，但是，当我们获取 Map 的 value 时，传入的变量不一定就是放入的那个 key 对象。换句话讲，两个 key 应该是内容相同，但不一定是同一个对象

---

### 在 Map 的内部，对 key 做比较是通过 equals()实现的，

- 这一点和 List 查找元素需要正确覆写 equals()是一样的，即正确使用 Map 必须保证：作为 key 的对象必须正确覆写 equals()方法

---

### HashMap 为什么能通过 key 直接计算出 value 存储的索引

- 相同的 key 对象（使用 equals()判断时返回 true）必须要计算出相同的索引，否则，相同的 key 每次取出的 value 就不一定对。
- 通过 key 计算索引的方式就是调用 key 对象的 hashCode()方法，它返回一个 int 整数。HashMap 正是通过这个方法直接定位 key 对应的 value 的索引，继而直接返回 value。

---

### 正确使用 Map 必须保证：

- https://www.liaoxuefeng.com/wiki/1252599548343744/1265117217944672
- 作为 key 的对象必须正确覆写 equals()方法，相等的两个 key 实例调用 equals()必须返回 true；
- 作为 key 的对象还必须正确覆写 hashCode()方法，且 hashCode()方法要严格遵循以下规范：
- 如果两个对象相等，则两个对象的 hashCode()必须相等；
- 如果两个对象不相等，则两个对象的 hashCode()尽量不要相等。

---

### 在计算 hashCode()的时候，经常借助 Objects.hash()来计算：所以，编写 equals()和 hashCode()遵循的原则是

```java
int hashCode() {
    return Objects.hash(firstName, lastName, age);
}
```

- equals()用到的用于比较的每一个字段，都必须在 hashCode()中用于计算；equals()中没有使用到的字段，绝不可放在 hashCode()中计算。
- 另外注意，对于放入 HashMap 的 value 对象，没有任何要求。

---

### hashCode()

- 实际上 HashMap 初始化时默认的数组大小只有 16，任何 key，无论它的 hashCode()有多大，都可以简单地通过：把索引确定在 0 ～ 15，即永远不会超出数组范围，上述算法只是一种最简单的实现。
  `int index = key.hashCode() & 0xf; // 0xf = 15`
- 添加超过一定数量的 key-value 时，HashMap 会在内部自动扩容，每次扩容一倍，即长度为 16 的数组扩展为长度 32，相应地，需要重新确定 hashCode()计算的索引位置。例如，对长度为 32 的数组计算 hashCode()对应的索引，计算方式要改为：
  `int index = key.hashCode() & 0x1f; // 0x1f = 31`

---

### hashCode()方法编写得越好，HashMap 工作的效率就越高

```java
int hashCode() {
    return Objects.hash(firstName, lastName, age);
}
```

---

### 哈希冲突 :

- 在冲突的时候，一种最简单的解决办法是用 List 存储 hashCode()相同的 key-value。
- 显然，如果冲突的概率越大，这个 List 就越长，Map 的 get()方法效率就越低，这就是为什么要尽量满足条件二：如果两个对象不相等，则两个对象的 hashCode()尽量不要相等。

---

### TreeSet

- Keeps the elements sorted and prevents duplicates.
- if you don't need the list to stay sorted. TreeSet might be more expensive than you need
- With ArrayList, inserts can be blindingly fast because the new element
  just goes in at the end.

---

### HashMap

Let's you store and access elements as name/value pairs.

---

### LinkedList

- Designed to give better performance when you insert or delete elements from the middle of the collection. (In practice, an ArrayUst is still usually what you want.)

---

### HashSet

- Prevents duplicates in the collection, and given an element, can find that element in the collection quickly.

---

### LinkedHashMap

- Like a regular HashMap, except it can remember the order in which elements (name/value pairs) were Inserted, or it can be configured to remember the order In which elements were last accessed.

---

### 稀疏矩阵（英語：sparse matrix）

- 在数值分析中，是其元素大部分为零的矩阵。反之，如果大部分元素都非零，则这个矩阵是稠密的。在科学与工程领域中求解线性模型时经常出现大型的稀疏矩阵。
- https://www.youtube.com/watch?v=awZ5pJGjS7o&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=8

---

### Queue

- 数组模拟队列
- 数组模拟环形队列 : 因为简单高效，所以甚至在硬件中都实现了环形队列
- https://www.youtube.com/watch?v=Syo8JiRP1Ys&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=14
- https://segmentfault.com/a/1190000022804140

---

### Stack

- 栈实现综合计算器
- https://www.youtube.com/watch?v=Xcmxxx2NH7w&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=33
- 前缀 中缀 后缀表达式规则
- 中缀转后缀表达式
- https://www.youtube.com/watch?v=sZdij3a5BYs&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=39
---

### Linked List

- 单链表
- 环形链表介绍和约瑟夫问题
- https://www.youtube.com/watch?v=mAzpiaiL8lk&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=27

---
