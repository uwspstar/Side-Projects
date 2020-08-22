### type

### 7 Primitive Types ( void, sun, nsb : avoid sun new SB)

- void
- undefined
- symbol
- null
- number
- boolean
- string

### 4 Object Types (coa f : sounds like cough)

- functions
- arrays
- classes
- objects

### type annotations

- array

```
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];
```

- classes

```
class Car {}
let car: Car
```

- Object literal

```
let point: {x:number; y:number}= {
    x:10,
    y:20
}
```

- function

```
const logNums: (i: number) => void = (i: number) =>{
    console.log(i);
};
```

### type annotations vs type inference

- type annotations : developer tell Typescript the type
- type inference : Typescript guess the type

### `Any` type

- avoid with Any type
- JSON.parse() return any type

```
const json = '{"x": 10, "y": 20}';
const coordinates:{x: number; y: number} = JSON.parse(json);
```
