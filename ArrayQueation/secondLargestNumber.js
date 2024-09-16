// Find the Second Largest Number in an Array

// Problem: Write a function to find the second largest number in an array of numbers.


const arr = [10, 5, 8, 21, 7];

// const arr = [0]

// const arr = [20, 17, 4, 7,9];

function secondLargestNumber(){
  
    if(arr === 0 || arr === null) return 0;
    
    let largest = arr[0];
    let secondLargest = arr[0]
    
    for(i=1; i<arr.length; i++){
      if(arr[i] < largest){
        secondLargest = largest
        largest = arr[i]
      }
    }
    
    
    
    return secondLargest
}

console.log(secondLargestNumber(arr))