// Find the Square Root of a Number (without using Math.sqrt())
// Write a function that calculates the square root of a given number without using the built-in Math.sqrt() method.

const num = 25;
// Output: 5

function squareRootOfNumber(num){

if(num <= 0) return false;

let guess = num;
let epsilion = 0.00001;

while(Math.abs(guess * guess - num)>epsilion){
    guess = (guess + num / guess) /2;
}

return guess;
}

console.log(squareRootOfNumber(num))

