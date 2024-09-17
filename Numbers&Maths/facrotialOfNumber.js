// Find the Factorial of a Number
// Write a function that takes a number as input and returns its factorial.

let num =  5;
// Output: 120

function facrotialOfNumber(num){
    if(num === 0 || num === null) return 1;

    let result = 1;

    for(i=1; i <= num; i++){
        result *= i;
        }
    return result;
}

console.log(facrotialOfNumber(num));
