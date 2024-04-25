// given postive and negative array, seperate negative and positive elements.


const jsArr = [1,-1,2,-2,3,-3,4,-4]

function positiveArr(){
    const positiveArrfilter = jsArr.filter(num => num < 0);
    return positiveArrfilter;
}

function negativeArr(){
    const negativeArrfilter = jsArr.filter(num => num > 0);
    return negativeArrfilter;
}

const positiveArrfilter = positiveArr();
const negativeArrfilter = negativeArr();


console.log(positiveArrfilter);
console.log(negativeArrfilter);
