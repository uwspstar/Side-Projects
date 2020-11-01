let name = 'xing';
let s = 'school';
let obj = {
  name,
  [s]: 'home',
  studyEs6() {
    console.log('studyEs6', this.name);
  },
  studyEs5: function () {
    console.log('studyEs5', this.name);
  },
  studyArrow: () => {
    console.log('studyArrow', this.name); // undefined : no this inside arrow function
    //ReferenceError: name is not defined
  },
};
obj.studyArrow(); // undefined
console.log(obj.studyArrow);