// Leet Code Solution :  2665:- Counter II


/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */


function createCounter(init){
    let currentValue = init;

    return {

        increment: function(){
            currentValue++;
            return currentValue;
        },

        decrement: function(){
            currentValue--;
            return currentValue;
        },

        reset: function(){
            currentValue = init;
            return currentValue;
        }
    };
}


const counter = createCounter(6);

console.log(counter.increment);
console.log(counter.increment);
console.log(counter.decrement);
console.log(counter.reset);



// https://leetcode.com/problems/counter-ii/submissions/1232937164?envType=study-plan-v2&envId=30-days-of-javascript