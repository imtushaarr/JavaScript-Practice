// Count Occurrences of a Specific Element in an Array
// Problem: Write a function that counts how many times a specific element appears in an array.

const arr = [1, 2, 3, 2, 2, 4, 5] // element = 2
// output : 3

function countOccurrences(arr, element){
  if(arr === 0 || arr.length === null) return 0;
  
  let count = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] == element){
      count++
    }
  }
  return count
}


console.log(countOccurrences(arr, 2))
