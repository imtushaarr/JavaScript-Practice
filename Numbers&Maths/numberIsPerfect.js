// Check if a Number is Perfect
// Write a function to check if a number is a “perfect number” (a number equal to the sum of its proper divisors, excluding the number itself).

const num = 28;
// Output: true

function numberIsPerfect(num){
    let sum = 0;

    for( let i=0; i<num; i++ ){
        if(num % 1 === 0){
            sum += 1
        }
    }
    return sum === num
}

console.log(numberIsPerfect(num));
