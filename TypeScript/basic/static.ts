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

let cat = new Cat();
Animal.isAnimal(cat);

console.log('static', Animal.isAnimal(cat));