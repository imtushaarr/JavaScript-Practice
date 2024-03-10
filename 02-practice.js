// How to check if an object is an array or not?

// let arr = [1, 2, 3, 4, 5];

// console.log(typeof arr);


function checkArray(e){
    return Array.isArray(e);
    // console.log(Array.isArray(e))
}

console.log(checkArray([]));
console.log(checkArray({}));
