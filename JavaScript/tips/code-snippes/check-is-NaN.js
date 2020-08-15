// 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断

function myIsNaN(value) {
    return value !== value;
}

const checkIsNaN = (val) => val !== val;

console.log(checkIsNaN('k')); // false
console.log(checkIsNaN(undefined)); // false
console.log(checkIsNaN(null)); // false
console.log(checkIsNaN(false)); // false
console.log(checkIsNaN({})); // false
console.log(checkIsNaN([])); // false