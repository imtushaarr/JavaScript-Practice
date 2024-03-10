// Given a string, reverse each word in the sentence.

/*var str = "Welcome to this Javascript Guide!";

var savedstr = str.split(" ").map(function(e){
    return e.split("").reverse().join("")
})

console.log(savedstr.join(" "))*/

// console.log(str.split("").reverse().join())


var word = "hello my name tushar gupta"

var str = word.split(" ").map(function(e){
    return e.split("").reverse().join("")
})

console.log(str.join(" "));