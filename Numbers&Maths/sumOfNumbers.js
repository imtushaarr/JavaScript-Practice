// Sum of Digits
// Write a function that takes a number as input and returns the sum of its digits.

const num = 123
// Output: 6


function sumOfNumbers(num){
    let splitNumber = num.toString().split('').map(Number);

    let sum = splitNumber.reduce((pre, cur) => pre+ cur);

    return sum;
}

console.log(sumOfNumbers(num));
