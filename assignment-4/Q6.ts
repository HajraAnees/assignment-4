// Question 6
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.


function removeNegativeNumbers(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; ) {
        if (numbers[i] < 0) {
            numbers.splice(i, 1);
        } else {
            i++;
        }
    }
    return numbers;
}

const numbersArray: number[] = [3, -5, 7, -2, 1, -8, 4];
const resultArray = removeNegativeNumbers(numbersArray);
console.log( resultArray);
