// Find the Second Largest Number in an Array
// Write a function to find the second largest number in an array.

const array =  [10, 5, 8, 12, 7];
// Output: 10

function secondLargestNumber(array){

    let maxNumber = Math.max(...array);

    let filterNumber = array.filter((num) => num != maxNumber );

    let secondLargest = Math.max(...filterNumber);

    return secondLargest;
    
}

console.log(secondLargestNumber(array));
