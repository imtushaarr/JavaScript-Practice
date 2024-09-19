// Find the Power of a Number
// Write a function to calculate x raised to the power n (i.e., x^n) without using the Math.pow() function.

const x = 2; 
const n = 3;
// Output: 8


function powerOfNumber(x,n){

    let value = 1;

    for( let i=0; i<n; i++){
        value *= x;
    }

    return value;
}

console.log(powerOfNumber(x,n))
