// Find the Product of Digits
// Write a function that takes a number as input and returns the product of its digits.

const num = 234
// Output: 24


function productOfDigits(num){
    let sum = 1;

    while (num != 0) 
    { 
        sum = sum * (num % 10); 
        num = Math.floor(num / 10); 
    } 

    return sum
}

console.log(productOfDigits(num))
