/* How to empty an array in JavaScript?
don't reset it to a new array, and do loop through to pop each value. */

var arr = [1,2,3,4,5,6]

arr.length = 0;

console.log(arr);