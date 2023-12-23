// Question 5
// - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
function positiveInteger(num) {
    var result = 1;
    for (var index = 1; index <= num; index++) {
        result = result * index;
    }
    return result;
}
console.log(positiveInteger(6)); // output 720
console.log('------------------------------------------------------');
