---
marp: true
theme: default
header: 'Csharp Vscode'
footer: 'by Xing'
paginate: true
size: 16:9
---

# Generic (.NET Framework 2.0)

- Compiler + JIT support
- .exe .dll through JIT to be machine code
- Generic type start with VS compile, to .exe or .dll (`compile time`), then, under CLR, JIT convert Generic type inside .exe or .dll to be real type (`run time`)
- `1 means 1 position, such as List<>
- `2 means 2 positions, such as Dictionary<,>

---

### box vs unbox

- `int` in stack, data inside stack will be released after used
- `string` data in heap, but location is in stack.
- `object` data in heap, but location is in stack.
- data in heap for share, will be collected later
- box : int to Object, it copy date from stack to heap
- unbox : Object to int, it copy date from heap to stack

---

### Generic fast than Object

- before Generic, ms using Object (.NET Framework 1.0), slow
- when use Object, the box and unbox will be used
- delay declare, per compile
- delay anything which we can delay, such as lazy loading

### Generic

- Generic Method
- Generic Class
- Generic Interface
- Generic Delegate

---

###
