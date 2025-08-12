/* 
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
*/

// Arrays for testing
let arr1 = [1, 5, 4, 30];
let arr2 = [-9, -5, 1];
let arr3 = [400, 200, -100, 0];


// Declaring functions for user options

function calcAbsValue(num) {
    return Math.abs(num);
}

function raiseToPower(base, power) {
    return Math.pow(base, power);
}

function calcSqRoot(num) {
    return Math.pow(num, 0.5); // raising a number to 0.5 returns its square root 
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}

function findMaxAndMin(arr) {
    console.log("Largest number: " + findMax(arr));
    console.log("Smallest number: " + findMin(arr));
}

function findRandomInt(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// TODO: round a number to a specified number of decimals 
// fix bug, function not working
function roundToDecimals(numToRound, numDecimals) {
    let factor = createDecimalFactor(numDecimals);
    let product = numToRound * factor;
    Math.round(product);
    let result = product / factor;
    return result;
}

function createDecimalFactor(input) { // creates a number 1 concatenated with specified number of 0's 
    let factor = "1"; // we also could raise 10 to the power of input 
    for (i = 0; i < input; i++) {
        factor += "0";
    } 
    return Number(factor); 
}

// test case 
console.log(roundToDecimals(5.98384, 2));

// TODO: function that runs the program

