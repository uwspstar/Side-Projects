//yield
/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield


 The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword


 yield can only be called directly from the generator function that contains it. 
 It CANNOT be called from nested functions or from callbacks.



 function* countAppleSales () {
  let saleList = [3, 7, 5]
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i]
  }
}
Once a generator function is defined, it can be used by constructing an iterator as shown.

let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }

 */