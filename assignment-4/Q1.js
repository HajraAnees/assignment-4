// Question 1
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function index_array(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var new_array = index_array(["India", "Pakistan", "Chine", "Egypt"], 2, "Iraq");
console.log(new_array);
