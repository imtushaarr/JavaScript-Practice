// Find Max and Min value in Array List
const val = [9,4,5,11,87,43,22,20,3,6,9];

// First Method
function maxValue(arr){
    let max = Math.max(...arr);
    return max
}
// console.log(maxValue(val))

// Second Method With Index

function maxValue(arr){
    let min = arr.reduce((min, currVal) => {
        return min > currVal ? currVal : min;
    }, arr[0])
    
    let indexMin = arr.indexOf(min);
    return `Min Value is ${min} and min value index is ${indexMin}`
}

console.log(maxValue(val))
