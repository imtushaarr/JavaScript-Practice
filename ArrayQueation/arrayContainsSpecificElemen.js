// Check if an Array Contains a Specific Element
// Problem: Write a function that takes an array and an element, and returns true if the element exists in the array, otherwise false.

const arr = [1, 2, 3, 4, 5] // element = 3

function specificEle(){
  
  let element = 8
  if ( arr.includes(element)){
    return true
  } else{
    console.log(`Element Not Found!`)
    return `Enter The Correct element!`
  }
  
}

console.log(specificEle(arr))