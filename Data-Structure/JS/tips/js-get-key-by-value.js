// if the map has same value and different key
// for the calling function, need to have logic remove the find key
// in case, can clone a map first

// see findClosestPointsOrigin

function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

let people = new Map();
people.set('1', 'john');
people.set('2', 'jasmine');
people.set('3', 'abode');

console.log(getKeyByValue(people, 'john'))
console.log(getKeyByValue(people, 'abode'))