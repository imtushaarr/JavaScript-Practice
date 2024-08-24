const primeNumber = 4;

let findPrimeNumber = (number) => {
  if (number <= 1) {
    return `${number} is not a prime number or composite number`;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    }
  }

  return `${number} is a prime number`;
}

console.log(findPrimeNumber(primeNumber));