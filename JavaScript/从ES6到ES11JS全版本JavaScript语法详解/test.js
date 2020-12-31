let dict = {
  k1: 'KEY ONE',
  k2: 'KEY TWO',
};
dict = new Proxy(dict, {
  get(target, prop) {
    // console.log(target, prop)
    return prop in target ? target[prop] : prop;
  },
});
console.log(dict['k1']);
console.log(dict['k10']);