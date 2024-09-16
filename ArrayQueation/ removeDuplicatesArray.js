// Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array with all duplicate values removed.


arr = [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


function duplicateArr(){
  let result = arr.filter((item, index)=>{
    return arr.indexOf(item) !== index;
  })
  
  return result
}

console.log(duplicateArr(arr))

