// isNaN vs Number.isNaN
{
    const name = "xing";
    const age = 21;
    console.log(Number.isNaN(name));//false
    console.log(Number.isNaN(age));//false

    console.log(isNaN(name));//true
    console.log(isNaN(age));//false

}
// for ... in 
{
    let obj = {
        name: "xing",
        age: 20
    }
    for (let item in obj) {
        console.log('item', item);
    }
    // item name
    // item age
}
// for...of vs for...in
{
    const arr = ["name", "age", "job"];
    for (let item in arr) {
        console.log(item); // 0 1 2
    }
    for (let item of arr) {
        console.log(item); // name age job
    }
}
// reduce
{
    [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
    //1 2
    //undefined 3
    //undefined 4
}