// Question 7
//  Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

let numberArray : number[] = [34,5,6,6,5,3,2,3,5,6,]
function sum(numberArray :number[]) : number{
    let sum = 0
    for(let index=0; index< numberArray.length; index++){
        sum += numberArray[index];
    }
    return sum
}
console.log(sum(numberArray));
export{}
