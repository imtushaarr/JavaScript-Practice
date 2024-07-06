// Program to find the minimum (or maximum) element of an array

const arr = [43,3455,2,543,232,654,3,22,463]

let n = arr.length;

let minVal = arr[0];
let maxVal = arr[0];

function findMinMax(arr){
    if(n===0){
        return null;
    }
    
    for(let i=0; i<n; i++){
        if(arr[i]< minVal){
            minVal = arr[i]
        } else if(arr[i] > maxVal){
            maxVal = arr[i]
        }
    }
    
    
    return `Min value is ${minVal} and Max value is ${maxVal}`
}

console.log(findMinMax(arr))


