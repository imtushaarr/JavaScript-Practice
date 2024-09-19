// Find the Maximum Product of Two Elements in an Array
// Write a function that returns the maximum product of any two numbers in a given array.

let num =  [5, 1, 3, 9, 7]
// Output: 63

function maximumpProductTwoElements(num){
    if(num < 2) return "Array must have at least two elements.";
    
    let max1 = -Infinity;
    let max2 = -Infinity;
    
    
    for(let i=0; i<num.length; i++){
        if(num[i] > max1){
            max2 = max1;
            max1 = num[i];
        } else if(num[i]> max2){
            max2 = num[i];
        }
    }
    
    return max1 * max2
    
}
console.log(maximumpProductTwoElements(num));
