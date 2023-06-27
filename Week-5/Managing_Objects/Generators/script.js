function yieldSymbols(arr) {
  // generator function
  return function* generatorFunction() {
    // traverse through the array
    for (const element of arr) {
      yield Symbol(element);
    }
  };
}

const output = yieldSymbols(["hello", "world", "test"]);

const generatorInstance = output();
console.log(generatorInstance.next().value);
console.log(generatorInstance.next().value);
console.log(generatorInstance.next().value);
