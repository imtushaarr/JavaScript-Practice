// Find the Greatest Common Divisor (GCD) of Two Numbers
// Write a function that takes two numbers as input and returns their greatest common divisor (GCD).

const input = 48
const input2 = 18
// Output: 6

function findGCD(a, b) {
    if (b === 0) {
        return a;  
    }
    return findGCD(b, a % b);  
}

console.log(findGCD(input, input2)); 
