// Check if a Number is Prime
// Write a function that checks if a given number is prime.

let num = 17;

function numberIfPrime() {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(numberIfPrime(num));
