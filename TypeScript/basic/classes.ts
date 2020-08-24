class Vehicle {
  private color;
  constructor(color: string) {
    this.color = color;
  }

  drive(): void {
    console.log('go go go go');
  }
  honk(): void {
    console.log('hhhh kkkkk');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('wo oooo');
  }
}

/*
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
*/

const car = new Car();
car.drive();
car.honk();
