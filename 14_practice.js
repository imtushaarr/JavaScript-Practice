// Find even and odd no value in array
const arrayVal = [1,2,4,3,5,6,8,9,12,13,16]

const evenVal = [];
const oddVal = [];

const findEvenVal = (arr)=>{
  for(let i= 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evenVal.push(arr[i]);
    } else {
      oddVal.push(arr[i]);
    }
  }
  return evenVal
}

const findOddVal = (arr)=>{
  return oddVal
}

console.log(`Your Even Value Are ${findEvenVal(arrayVal)}`)
console.log(`Your Even Value Are ${findOddVal(arrayVal)}`)


