const marks = [98, 96,44,76,34]

let sum = 0;

for(let val of marks){
    sum += val;
}

let avg = sum / marks.length

console.log(`The Average Marks of Students : ${avg}`);
