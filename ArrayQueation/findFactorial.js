// const userInput = prompt("Enter your number:");
// const userNumber = Number(userInput);

const userNumber = "16"

const findFactorialValue = (num) => {
  if (Number.isInteger(num) && num >= 0) {
    let result = 1
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  } else {
    return `${typeof userNumber} ${userNumber} is not a valid number`; 
  }
}

console.log(findFactorialValue(userNumber));