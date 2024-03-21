const one = '';
const two = 4;

// Function to prompt user for input
var input = function() {
    return Number(prompt(`Enter the number ${one}`));
};

// Call the input function to get user input
var userInput = input();

if (userInput < two) {
    console.log(`${two} is greater than ${userInput}`);
} else if (userInput > two) {
    console.log(`${userInput} is less than ${two}`);
} else {
    console.log(`${userInput} and ${two} are equal.`);
}
