class Animal {
    static isAnimal(obj) {
        return obj instanceof Animal
    }
}

class Cat extends Animal {
    constructor (){
        super();
    }
}

class Dog {
    static age = 30
}

let cat = new Cat();
Animal.isAnimal(cat);

console.log('Dog.age', Dog.age);
console.log('static', Animal.isAnimal(cat));