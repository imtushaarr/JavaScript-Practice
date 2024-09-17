// Check if a Number is a Palindrome
// Write a function that checks if a number is a palindrome (reads the same backward as forward).

const num = 151
// Output: true

function numberIsPalindrome(num){
    let reverseNumber = num.toString().split('').reverse().join('')

    if(num == Number(reverseNumber)){
        return true;
    }

    return false;
}

console.log(numberIsPalindrome(num))
