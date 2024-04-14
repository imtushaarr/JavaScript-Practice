const a = [ ]

function userInput() {
    let input = prompt("Enter a number between 0 and 9:");

    let number = parseInt(input);

    if (!isNaN(number) && number >= 0 && number <= 10 && input.length === 1 ) {
        return number;
    } else {
        alert("Please enter a valid single-digit number between 0 and 9");
        return userInput();
    }
}


const userInputNumber = userInput();

function findEvenNumber(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i])
        }
    }
}


function generateArray(number){
    const array = [];
    
    for(i = 0; i<= number; i++){
        array.push(i)
    }
    return array;
}

const newArray = generateArray(userInputNumber)

findEvenNumber(newArray);