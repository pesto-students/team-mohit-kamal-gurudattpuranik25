// Inheritance

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Polymorphism

class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  calculateArea(width, height) {
    return width * height;
  }
}

class Triangle extends Shape {
  calculateArea(base, height) {
    return (base * height) / 2;
  }
}

class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

const reactangle = new Rectangle();
console.log(reactangle.calculateArea(10, 20));

const triangle = new Triangle();
console.log(triangle.calculateArea(10, 20));

const circle = new Circle();
console.log(circle.calculateArea(10));

// Abstraction & Encapsulation

class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._accountHolderName = accountHolderName;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    this._balance = this._balance + amount;
  }
  withdraw(amount) {
    this._balance = this._balance - amount;
  }
  getBalance() {
    return this._balance;
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    this._balance = this._balance + amount;
  }
  withdraw(amount) {
    this._balance = this._balance - amount;
    if (this._balance < 0) {
      this._balance = this._balance + amount;
      console.log(
        "In savings account, withdrawl amount should be less than or equal to balance"
      );
    }
  }
  getBalance() {
    return this._balance;
  }
}

const savingsAccount = new SavingsAccount(123, 5000, "Guru");
savingsAccount.deposit(1000);
savingsAccount.withdraw(2000);
console.log(`Savings account balance : ${savingsAccount.getBalance()}`);

const checkingAccount = new CheckingAccount(321, 8000, "Guru");
checkingAccount.deposit(1000);
checkingAccount.withdraw(200);
console.log(`Checking account balance : ${checkingAccount.getBalance()}`);
