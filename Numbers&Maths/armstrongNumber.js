// Check if a Number is an Armstrong Number
// An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. Write a function to check if a given number is an Armstrong number.

const num = 153
// Output: true


function armstrongNumber(num){
    let digitsArray = num.toString().split("").map(Number);
    let numDigits = digitsArray.length;
   let sum = 0;
    for(let i=0; i<numDigits; i++){
        sum +=  Math.pow(digitsArray[i],  numDigits)
    }
    return sum === num;
}
console.log(armstrongNumber(num))
