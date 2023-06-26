function calcWordFrequencies() {
  const userInput = prompt("Enter your list of words:");
  const wordsArray = userInput.split(" ");
  let frequencies = {};
  wordsArray.map((word) => {
    let element = word;
    if (frequencies[element]) {
      frequencies[element]++;
    } else {
      frequencies[element] = 1;
    }
  });
  console.log(frequencies);
}
