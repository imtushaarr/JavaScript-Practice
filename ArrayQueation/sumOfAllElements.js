// Sum of All Elements in an Array
// Problem: Write a function that takes an array of numbers and returns the sum of all elements.

const arr = [1, 2, 3, 4, 5]

const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial)
// Output: 15
