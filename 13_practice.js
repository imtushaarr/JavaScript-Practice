
const arrVal = [1,2,3,5,6,8,9,0]

const initVal = [];

let missingVal =(arr)=>{
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  
  for(let i=minVal; i<=maxVal; i++){
    if(arr.indexOf(i)<0){
      initVal.push(i)
    }
  }
  
  return (initVal)
}

console.log(missingVal(arrVal))
