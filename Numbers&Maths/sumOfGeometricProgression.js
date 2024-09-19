// Find the Sum of a Geometric Progression
// Write a function that returns the sum of the first n terms of a geometric progression given the first term a and the common ratio r.

const firstTerm = 2
const commonRatio = 3
const numTerms = 4
// Output: 80


function sumOfGeometricProgression(a, r, n){
    if(r===1){
        return a*n
    }

    let sum = a * (Math.pow(r, n) -1) / (r-1)

    return sum;
}


console.log(sumOfGeometricProgression(firstTerm, commonRatio, numTerms))
