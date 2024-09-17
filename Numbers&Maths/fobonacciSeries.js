// Generate Fibonacci Sequence
// Write a function that generates the first n numbers of the Fibonacci sequence.

const input = 7
// Output: [0, 1, 1, 2, 3, 5, 8]

function fobonacciSeries(input){
    let seriesStart = [0,1];
    for(i=2; i<input; i++){
        let nextNum = seriesStart[i-1] + seriesStart[i-2];
        seriesStart.push(nextNum)
    }
    return seriesStart;
}


console.log(fobonacciSeries(input))
