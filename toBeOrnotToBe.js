// Leet Code Solution : 2704:- To Be Or Not To Be

/* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */


function expect(val){
    return {
        toBe: function(otherVal){
            if(val !== otherVal){
            throw new Error("Not Equal");
            }
            return true;
        },

        notToBe: function(otherVal){
            if(val === otherVal){
                throw new Error("Equal")
            }
            return true;
        }
    }
}


try{
    expect(5).toBe(5);
    console.log("Test Passed 5 === 5")

    expect(5).notToBe(10);
    console.log("Test Passed 5 !== 10")

    expect(5).toBe(10);
} catch(error){
    console.error(error.message);
}


// https://leetcode.com/problems/to-be-or-not-to-be/submissions/1232914679?envType=study-plan-v2&envId=30-days-of-javascript