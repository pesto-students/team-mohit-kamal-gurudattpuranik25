let nums = [2, 4, 6, 8];
// declaration of empty arrays
let evenNums = [];
let oddNums = [];

const divideArray = () => {
  nums.map((element) => {
    // check for even number
    if (element % 2 === 0) {
      evenNums.push(element);
    } else {
      oddNums.push(element);
    }
  });

  console.log("Even Numbers:");
  // conditional rendering of result (None or sorted array)
  evenNums.length === 0 ? console.log("None") : console.log(evenNums.sort());
  console.log("Odd Numbers:");
  oddNums.length === 0 ? console.log("None") : console.log(oddNums.sort());
};
