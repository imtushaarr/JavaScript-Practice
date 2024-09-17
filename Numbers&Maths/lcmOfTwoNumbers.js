// Find the Least Common Multiple (LCM) of Two Numbers
// Write a function that takes two numbers as input and returns their least common multiple (LCM).

const num =  4;
const num2 = 6;
// Output: 12

function lcmOfTwoNumbers(num, num2) {
        let max = (num > num2) ? num : num2;  
        let lcm = max;
        
        while (true) {
            if (lcm % num === 0 && lcm % num2 === 0) {
                break; 
            }
            lcm++; 
        }
    return lcm;
}

console.log(lcmOfTwoNumbers(num, num2));
