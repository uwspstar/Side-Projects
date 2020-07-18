// if the map has same value and different key, so result could be more than one

// may key can be anything
// for the calling function, need to have logic remove the find key
// in case, can clone a map first

// see findClosestPointsOrigin
// using for..of  ( *** all is using "of" *** )
// let key of map.keys()
// let val of map.values()
// let [key,value] of map.entries()

// first match
function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue) // first match
      return key;
  }
}

// return list of keys ,keys are different, but value can be same
const getKeyListByValue = function getKeyListByValue(map, searchValue) {
  let result = [];
  for (let [key, value] of map.entries()) {
    if (value === searchValue) {
      result.push(key); // find all match should be different keys, value can be same
    }
  }
  return result;
}

let people = new Map();
people.set('1', 'john');
people.set('2', 'jasmine');
people.set('3', 'abode');
people.set('4', 'abode');
people.set('5', 'abode');

console.log(getKeyByValue(people, 'john'));
console.log(getKeyByValue(people, 'abode'));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// single key find()
// If Multiple keys have Same value use filter instead of find function getKeyByValue(object, value) using filter()

// first first one
function getKeyByValueWithObject(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// find a list of keys
Object.keys(object).filter(key => object[key] === value);

const obj = { "first": "1", "second": "2" };
console.log(getKeyByValueWithObject(obj, "2"));

// The yield keyword is used to pause and resume a generator function (function* or legacy generator function)