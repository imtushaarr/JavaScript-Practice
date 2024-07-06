// Find a peak element which is not smaller than its neighbours

const arr = [5, 10, 14, 11]

let n = arr.length;


function peakFind(arr){
    // Handle the case of an empty array
    if(n===0){
        return null;
    }

    // If there's only one element, it's the peak
    if(n===1){
        return 0;
    }

    // Check if the first element is a peak
    if(arr[0] >= arr[1]){
        return 1;
    }

    // Check if the last element is a peak
    if(arr[n-1] >= arr[n-2]){
        return n-1;
    }

    // Check for peaks in the middle of the array
    for(let i = 1; i < n-1; i++){
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]){
            return i;
        }
    }

    return null; // No peak found
}

let peakIndex = peakFind(arr)
console.log(`Peak value index is ${peakIndex} and value is ${arr[peakIndex]}`);