//Tuple : Array like structure where each element represents some property of a record

// may not always use it

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];
const coco: Drink = ['brown', true, 40];
const tea: Drink = ['brown', true, 40];

//const carSpecs: [number, number] = [400,3354];

const carSpecs = {
  horsepower: 400,
  weight: 3354,
};
