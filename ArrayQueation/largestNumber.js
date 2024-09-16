// Find the Largest Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in the array.

function largestNumber(arr){
    if(arr === 0 || arr === null) return 0; 

    let largest = arr[0];

    for(let i=1; i<arr.length; i++){
        
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}

const arr = [10, 5, 8, 21, 7];
console.log(largestNumber(arr));



// Using Math.max() method

function largestNumber1(arr1){

    return arr.Math.max(...arr1)
}

const arr1 = [10, 5, 8, 21, 7];
console.log(largestNumber(arr1));
