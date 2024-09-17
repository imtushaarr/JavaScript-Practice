// Find the Index of a Specific Element in an Array
// Problem: Write a function that takes an array and an element, and returns the index of the element in the array, or -1 if it is not present.

const arr = [10, 5, 8, 21, 7] 
let element = 21
// Output: 3


function indexOfArray(arr, element){
  let indexResult = arr.indexOf(element);

  return indexResult;
}

console.log(indexOfArray(arr, 21))
