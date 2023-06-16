const counter = () => {
  let counter = 0;
  const incrementCounter = () => {
    return (counter = counter + 1);
  };
  return incrementCounter;
};

const firstCounter = counter();
const secondCounter = counter();

let firstValues = [];
let secondValues = [];

for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log(firstValues);
console.log(secondValues);
