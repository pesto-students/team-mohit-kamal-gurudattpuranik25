// parent class
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  // methods
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

// child class
class ScientificCalculator extends Calculator {
  constructor(a, b) {
    super(a, b);
    // binding methods to the instance of class
    this.multiplyByTwo = this.multiplyByTwo.bind(this);
    this.powerOfThree = this.powerOfThree.bind(this);
  }

  // methods
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
  multiplyByTwo(a) {
    return a * 2;
  }
  powerOfThree(a) {
    return this.power(a, 3);
  }
}

// creating an instance of ScientificCalculator class
const sciCalc = new ScientificCalculator();

sciCalc.add.call(this, 10, 5);
sciCalc.subtract.apply(this, [10, 5]);

console.log(sciCalc.multiplyByTwo(5));
console.log(sciCalc.powerOfThree(2));
