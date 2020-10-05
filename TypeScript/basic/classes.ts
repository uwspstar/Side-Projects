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

abstract class Play {
  public name:string;
  public abstract sayHi();
}

class Boy extends Play {
  public sayHi(){};
}


