// protecting the object

const person = {
  name: "Priyanka",
  age: 24,
  email: "priyanka@gmail.com",
};

// defining read-write properties
Object.defineProperties(person, {
  name: {
    value: person.name,
    writable: false,
  },
  email: {
    value: person.email,
    writable: false,
  },
  age: {
    value: person.age,
    writable: true,
  },
});

// create methods using prtotype
Object.prototype.getAge = function () {
  return this.age;
};

Object.prototype.setAge = function (age) {
  this.age = age;
};

// javascript prototype

// base class
class Vehicle {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }

  getDetails() {
    return `${this.make}, ${this.model} from ${this.year}`;
  }
}

// inherited class
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year), (this.numDoors = numDoors);
  }

  // method overriding
  getDetails() {
    return `${this.make}, ${this.model} from ${this.year} and it has ${this.numDoors} doors`;
  }
}

const vehicle = new Vehicle("Hyundai", "Creta", 2022);
console.log(vehicle.getDetails());

const car = new Car("Tata", "Nano", 2015, 4);
console.log(car.getDetails());
