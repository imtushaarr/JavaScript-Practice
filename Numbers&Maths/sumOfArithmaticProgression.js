// Sum of an Arithmetic Progression
// Write a function that takes the first term, the common differenc and the number of terms, and returns the sum of the arithmetic progression.

const firstTerm = 1 
const commonDifference = 3
const numTerms = 5
// Output: 35


// an = a + (n − 1) × d

// S_n = \frac{n}{2} \times (2a + (n - 1) \times d)

function arithmaticProgression(a,n,d){
    
    let sumOfArithmaticProgression = (n / 2)*(2*a + (n-1)
    * d)
    
    return sumOfArithmaticProgression;
}

console.log(arithmaticProgression(firstTerm,numTerms,commonDifference))
