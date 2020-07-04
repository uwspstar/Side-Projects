// if the map has same value and different key, so result could be more than one
// may key can be anything
// for the calling function, need to have logic remove the find key
// in case, can clone a map first

// see findClosestPointsOrigin

function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

const getKeyListByValue  = function getKeyListByValue(map, searchValue) {
  let result = []
  for (let [key, value] of map.entries()) {
    if (value === searchValue) {
      result.push(key)
    }    
  }
  return result
}

let people = new Map();
people.set('1', 'john');
people.set('2', 'jasmine');
people.set('3', 'abode');

console.log(getKeyByValue(people, 'john'))
console.log(getKeyByValue(people, 'abode'))