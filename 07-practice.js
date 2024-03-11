// Write a JavaScript function that is reserve number by complex way.

function reverse(num){
    var rev = 0;
    while(num>0){
        var rem = rem % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }

    return rev;
}

console.log(reverse('1234'));