//same type in array
let colorStr: string[] = [];
const color: string[] = ['red', 'green', 'blue'];
let colorStr2: string[][] = [];
const color2: string[][] = [
  ['red', 'green', 'blue'],
  ['one', 'two', 'three'],
];

// help with 'map'
color.map((col: string): string => {
  return col;
});
