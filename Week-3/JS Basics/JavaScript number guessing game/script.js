const playGuessingGame = (numberToBeGuessed, tries = 10) => {
  let count = 0;
  while (count < tries) {
    // accept user input
    const userInput = prompt("Enter a number between 1 and 100.");

    // when cancel button is clicked, prompt returns null
    if (userInput === null) {
      return 0;
    } else if (isNaN(userInput) || userInput.length === 0) {
      alert("Please enter a number.");
    } else if (userInput > 100 || userInput < 1) {
      alert("Please enter a number between 1 an 100");
    } else {
      // when user input is greater than the number to be guessed
      if (userInput > numberToBeGuessed) {
        alert(`${userInput} is too large. Guess a smaller number`);
        if (count === tries - 1) {
          alert("Game over!");
          return 0;
        } else {
          count++;
        }
      } else if (userInput < numberToBeGuessed) {
        // when user input is less than the number to be guessed
        alert(`${userInput} is too small. Guess a larger number.`);
        if (count === tries - 1) {
          alert("Game over!");
          return 0;
        } else {
          count++;
        }
      } else {
        // since count is starting from 0, the function returns count + 1
        return count + 1;
      }
    }
  }
};
