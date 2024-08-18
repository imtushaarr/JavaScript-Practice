// Find the duplicate array in the Array List
const arrayList = [1,2,3,6,4,3,3,4,8,7,6,5,4,3,6,9];

let duplicateAray = arrayList.filter((val, i) => arrayList.indexOf(val) !== i);
console.log(duplicateAray);
