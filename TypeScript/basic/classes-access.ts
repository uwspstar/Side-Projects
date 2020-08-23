// public can be called anywhere
// private only called by same class
// protected can also from children class

class Vehicle1 {
  public honk(): void {
    console.log('hhhh kkkkk');
  }
  protected beep(): void {
    console.log('beep kkkkk');
  }
}

//private only called by same class
class Car1 extends Vehicle1 {
  private drive(): void {
    console.log('wo oooo');
  }

  toDriveCar(): void {
    this.drive();
    this.beep();
  }
}

/*
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
*/

const car1 = new Car1();
car1.toDriveCar();
car1.honk();
