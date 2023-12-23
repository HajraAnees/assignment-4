"use strict";
// Question 8 
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
Object.defineProperty(exports, "__esModule", { value: true });
var Celsius_temp_readings = [35, 89, 52, 45.2];
var Fahrenheit_temp_readings = [];
for (var index = 0; index < Celsius_temp_readings.length; index++) {
    var element = Celsius_temp_readings[index];
    var Fahrenheit = (element * 9 / 5) + 32;
    console.log(Fahrenheit);
    Fahrenheit_temp_readings.push(Fahrenheit);
}
console.log(Fahrenheit_temp_readings);
