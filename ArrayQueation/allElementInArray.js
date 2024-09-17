// Check if All Elements in an Array are Positive
// Problem: Write a function that checks if all elements in a given array of numbers are positive.

const arr = [1, 2, 3, 4, 5]
// Output: true

function allElementInArray(arr, ele){
  let allElementInArrayResult = arr.includes(ele);

  return allElementInArrayResult;
}

console.log(allElementInArray(arr, (1,2,3,4,5)))
