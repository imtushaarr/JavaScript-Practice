// Convert a Decimal Number to Binary
// Write a function that converts a given decimal number to its binary representation.

const num = 13
// Output: "1101"

function numberToBinary(num){
    let binary=[];

    while(num>0){
        let reminder = num % 2;
        binary.push(reminder);
        num = Math.floor(num/2);
    }
    return binary.reverse().join('');
}

console.log(numberToBinary(num))
