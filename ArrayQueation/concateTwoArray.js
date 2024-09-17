// Concatenate Two Arrays
// Problem: Write a function that takes two arrays and concatenate
// them into a single array.

const arr1 = [1, 2]
const arr2 = [3, 4]
// Output: [1, 2, 3, 4]


function concateArray(){
    let concateArrayResult = arr1.concat(arr2)
    
    return concateArrayResult;
}

console.log(concateArray(arr1, arr2))
