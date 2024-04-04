const a = '';
const b = '';

var input = function(){
    return Number(prompt(`Enter the value of A : ${a}`));
}

var input2 = function(){
    return Number(prompt(`Enter the value of B : ${b}`));
}

let userInputOne = input();
let userInputTwo = input2();


if(userInputOne < userInputTwo){
    console.log(`${userInputOne} is less then ${userInputTwo}`)
} else if (userInputOne > userInputTwo){
    console.log(`${userInputOne} is greater then ${userInputTwo}`)
} else{
    console.log(`${userInputOne} both are equal ${userInputTwo}`)
}


// const a = " ";
// const b = 23;


// var input = function(){
//     return (prompt(`enter the value of a: ${a}`)) + b;
// }


// console.log(input())
