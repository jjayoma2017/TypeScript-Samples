class Vehicle {
  constructor(public color: string) {}
  drive(): string {
    return 'Chuga chuga';
  }
  honk(): string {
    return 'Honk';
  }
}

class Car extends Vehicle {
  constructor(wheels: number, color: string) {
    super(color);
  }
  drive(): string {
    return 'Broom';
  }
}

const cars = new Car(4, 'red');
console.log(cars.honk());
console.log(cars.drive());
