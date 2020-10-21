// typeof is not always correct
// typeof only for basic type, not for reference, such as []

let checkType = data => {
    return Object.prototype.toString.call(data).slice(8, -1);

}
console.log('{} type', checkType({}))
console.log('[] type', checkType([]))